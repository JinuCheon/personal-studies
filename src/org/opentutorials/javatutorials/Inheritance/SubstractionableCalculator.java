package org.opentutorials.javatutorials.Inheritance;

class Calculator {
	int left, right;
	public Calculator(int left, int right) {
		this.left = left;
		this.right = right;
	}
	public void sum() {
		System.out.println(this.left+this.right);
	}
	public void avg() {
		System.out.println((this.left+this.right)/2);
	}
}

class InheritancedCalculator extends Calculator{
	public InheritancedCalculator(int left, int right) {
		super(left, right);
	}

	public void substract() {
		System.out.println(this.left - this.right);
	}
}

public class SubstractionableCalculator {
	public static void main(String[] args) {
		InheritancedCalculator c1 = new InheritancedCalculator(50, 20);
		c1.sum();
		c1.avg();
		
		InheritancedCalculator c2 = new InheritancedCalculator(20,30);
		c2.sum();
		c2.avg();
	}
}