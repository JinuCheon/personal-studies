public class Egg {
    public static void main(String[] args) {

        int numberOfBasket, eggsPerBasket, totalEggs;

        numberOfBasket = 10;
        eggsPerBasket = 6;

        totalEggs = numberOfBasket * eggsPerBasket;

        System.out.println("if you have");
        System.out.println(eggsPerBasket + " eggs per basket and");
        System.out.println(numberOfBasket + " baskets, then");
        System.out.println("the total number of eggs is " + totalEggs);
    }
}
