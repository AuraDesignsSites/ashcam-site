#!/usr/bin/env node

/**
 * Accessibility Audit Script
 * Checks for common accessibility issues
 */

import fs from 'fs';
import path from 'path';

const SRC_DIR = './src';
const ISSUES = [];

console.log('🔍 Accessibility Audit');
console.log('====================\n');

// Check for missing alt attributes
function checkAltAttributes() {
  console.log('1. Checking image alt attributes...');
  
  const files = getAllFiles(SRC_DIR, ['.tsx', '.ts', '.jsx', '.js']);
  let altIssues = 0;
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const imgMatches = content.match(/<img[^>]*>/g) || [];
    
    imgMatches.forEach(imgTag => {
      if (!imgTag.includes('alt=')) {
        altIssues++;
        ISSUES.push({
          type: 'Missing Alt',
          file: file,
          issue: 'Image missing alt attribute',
          tag: imgTag
        });
      }
    });
  });
  
  if (altIssues === 0) {
    console.log('   ✅ All images have alt attributes');
  } else {
    console.log(`   ❌ Found ${altIssues} images missing alt attributes`);
  }
}

// Check for form labels
function checkFormLabels() {
  console.log('\n2. Checking form accessibility...');
  
  const files = getAllFiles(SRC_DIR, ['.tsx', '.ts', '.jsx', '.js']);
  let formIssues = 0;
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for input elements without labels
    const inputMatches = content.match(/<input[^>]*>/g) || [];
    inputMatches.forEach(inputTag => {
      const idMatch = inputTag.match(/id="([^"]*)"/);
      if (idMatch) {
        const id = idMatch[1];
        const hasLabel = content.includes(`htmlFor="${id}"`) || content.includes(`for="${id}"`);
        if (!hasLabel) {
          formIssues++;
          ISSUES.push({
            type: 'Missing Label',
            file: file,
            issue: `Input with id="${id}" missing label`,
            tag: inputTag
          });
        }
      }
    });
    
    // Check for textarea elements without labels
    const textareaMatches = content.match(/<textarea[^>]*>/g) || [];
    textareaMatches.forEach(textareaTag => {
      const idMatch = textareaTag.match(/id="([^"]*)"/);
      if (idMatch) {
        const id = idMatch[1];
        const hasLabel = content.includes(`htmlFor="${id}"`) || content.includes(`for="${id}"`);
        if (!hasLabel) {
          formIssues++;
          ISSUES.push({
            type: 'Missing Label',
            file: file,
            issue: `Textarea with id="${id}" missing label`,
            tag: textareaTag
          });
        }
      }
    });
  });
  
  if (formIssues === 0) {
    console.log('   ✅ All form inputs have proper labels');
  } else {
    console.log(`   ❌ Found ${formIssues} form inputs missing labels`);
  }
}

// Check for heading hierarchy
function checkHeadingHierarchy() {
  console.log('\n3. Checking heading hierarchy...');
  
  const files = getAllFiles(SRC_DIR, ['.tsx', '.ts', '.jsx', '.js']);
  let headingIssues = 0;
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const headingMatches = content.match(/<h[1-6][^>]*>/g) || [];
    
    let lastLevel = 0;
    headingMatches.forEach(heading => {
      const levelMatch = heading.match(/<h([1-6])/);
      if (levelMatch) {
        const level = parseInt(levelMatch[1]);
        if (level > lastLevel + 1) {
          headingIssues++;
          ISSUES.push({
            type: 'Heading Hierarchy',
            file: file,
            issue: `Heading h${level} follows h${lastLevel} (should be h${lastLevel + 1})`,
            tag: heading
          });
        }
        lastLevel = level;
      }
    });
  });
  
  if (headingIssues === 0) {
    console.log('   ✅ Heading hierarchy is correct');
  } else {
    console.log(`   ❌ Found ${headingIssues} heading hierarchy issues`);
  }
}

// Check for focus management
function checkFocusManagement() {
  console.log('\n4. Checking focus management...');
  
  const files = getAllFiles(SRC_DIR, ['.tsx', '.ts', '.jsx', '.js']);
  let focusIssues = 0;
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for buttons without proper focus states
    const buttonMatches = content.match(/<button[^>]*>/g) || [];
    buttonMatches.forEach(buttonTag => {
      if (!buttonTag.includes('focus-visible:') && !buttonTag.includes('focus:')) {
        focusIssues++;
        ISSUES.push({
          type: 'Focus Management',
          file: file,
          issue: 'Button missing focus styles',
          tag: buttonTag
        });
      }
    });
  });
  
  if (focusIssues === 0) {
    console.log('   ✅ Focus management looks good');
  } else {
    console.log(`   ❌ Found ${focusIssues} focus management issues`);
  }
}

// Check for ARIA attributes
function checkAriaAttributes() {
  console.log('\n5. Checking ARIA attributes...');
  
  const files = getAllFiles(SRC_DIR, ['.tsx', '.ts', '.jsx', '.js']);
  let ariaIssues = 0;
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for interactive elements that might need ARIA
    const interactiveElements = content.match(/<(button|a|input|select|textarea)[^>]*>/g) || [];
    interactiveElements.forEach(element => {
      // Check if element has accessible name
      const hasAriaLabel = element.includes('aria-label=');
      const hasAriaLabelledBy = element.includes('aria-labelledby=');
      const hasTextContent = element.match(/>[^<]+</);
      const hasAlt = element.includes('alt=');
      
      if (!hasAriaLabel && !hasAriaLabelledBy && !hasTextContent && !hasAlt) {
        ariaIssues++;
        ISSUES.push({
          type: 'ARIA',
          file: file,
          issue: 'Interactive element missing accessible name',
          tag: element
        });
      }
    });
  });
  
  if (ariaIssues === 0) {
    console.log('   ✅ ARIA attributes look good');
  } else {
    console.log(`   ❌ Found ${ariaIssues} ARIA issues`);
  }
}

// Helper function to get all files
function getAllFiles(dir, extensions) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  });
  
  return files;
}

// Main audit function
function runAudit() {
  checkAltAttributes();
  checkFormLabels();
  checkHeadingHierarchy();
  checkFocusManagement();
  checkAriaAttributes();
  
  console.log('\n📊 Audit Summary');
  console.log('================');
  
  if (ISSUES.length === 0) {
    console.log('🎉 No accessibility issues found!');
  } else {
    console.log(`Found ${ISSUES.length} accessibility issues:\n`);
    
    ISSUES.forEach((issue, index) => {
      console.log(`${index + 1}. ${issue.type} in ${issue.file}`);
      console.log(`   Issue: ${issue.issue}`);
      console.log(`   Element: ${issue.tag}\n`);
    });
  }
  
  console.log('\n📋 Recommendations:');
  console.log('1. Add skip links for keyboard navigation');
  console.log('2. Ensure color contrast meets WCAG AA standards');
  console.log('3. Test with screen readers');
  console.log('4. Add ARIA landmarks where appropriate');
  console.log('5. Implement proper error handling for forms');
}

// Run the audit
runAudit();
