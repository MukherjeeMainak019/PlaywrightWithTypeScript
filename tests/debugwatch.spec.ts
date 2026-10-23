//create a small sum function in a test class which will add first 10 number 0 to 9 and return the resultimport { describe, it, expect } from 'vitest';
import {test, expect} from '@playwright/test';
class SumCalculator {
  sumFirstTenNumbers(): number {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += i;
    }
    return sum;
  }
}

test.describe('SumCalculator', () => {
  test('should correctly sum the first 10 numbers from 0 to 9', () => {
    const calculator = new SumCalculator();
    const result = calculator.sumFirstTenNumbers();
    expect(result).toBe(45); // 0 + 1 + 2 + ... + 9 = 45
  });
});