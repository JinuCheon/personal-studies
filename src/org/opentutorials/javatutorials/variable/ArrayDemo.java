package org.opentutorials.javatutorials.variable;

public class ArrayDemo {
	public static void main(String[] args) {
		String[] arrayString = {"천진우", "천진우2", "천진우3"};
		int[] arrayInt = {1, 2, 3};
		String[] arrayString2 = new String[3];

		System.out.println(arrayString[2]);
		System.out.println(arrayInt.length);
		
		for(int i=0;i<arrayString.length;i++) {
			arrayString2[i] = arrayString[i];
			System.out.println(arrayString2[i]);
		}
		
		for(String e : arrayString2) {
			System.out.println(e + " foreach 문법입니다.");
		}
	}
}
