#!/usr/bin/env node

/**
 * HTTPS Verification Script
 * Verifies essential HTTPS configuration
 */

import https from 'https';

const DOMAIN = 'ashcamcuttingsolution.ca';
const HTTPS_URL = `https://${DOMAIN}`;

console.log('🔒 HTTPS Security Verification');
console.log('============================\n');

// Test HTTPS headers
function testHttpsHeaders() {
  return new Promise((resolve) => {
    console.log('Testing HTTPS security headers...');
    
    const req = https.request(HTTPS_URL, { method: 'HEAD' }, (res) => {
      const headers = res.headers;
      const requiredHeaders = [
        'strict-transport-security',
        'x-content-type-options',
        'x-frame-options'
      ];
      
      let allPresent = true;
      requiredHeaders.forEach(header => {
        if (headers[header]) {
          console.log(`   ✅ ${header}: ${headers[header]}`);
        } else {
          console.log(`   ❌ Missing: ${header}`);
          allPresent = false;
        }
      });
      
      if (allPresent) {
        console.log('   🎉 Essential security headers present!');
      } else {
        console.log('   ⚠️  Some security headers missing');
      }
      
      resolve();
    });
    
    req.on('error', (err) => {
      console.log(`   ❌ HTTPS request failed: ${err.message}`);
      resolve();
    });
    
    req.end();
  });
}

// Main verification function
async function verifyHttps() {
  try {
    await testHttpsHeaders();
    
    console.log('\n🎯 HTTPS Verification Complete!');
    console.log('\n📋 Next Steps:');
    console.log('1. Deploy to production with updated vercel.json');
    console.log('2. Test with SSL Labs: https://www.ssllabs.com/ssltest/');
    console.log('3. Monitor in Google Search Console');
    
  } catch (error) {
    console.error('❌ Verification failed:', error);
  }
}

// Run verification
verifyHttps();
