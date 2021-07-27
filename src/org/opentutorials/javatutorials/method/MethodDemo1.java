package org.opentutorials.javatutorials.method;

public class MethodDemo1 {
	public static void numbering(int num) {
		 int i = 1;
		 while (i < 10) {
			 System.out.println(i*num);
			 i++;
		 }
	}
	public static void main(String[] args) {
		numbering(3);
	}
}
