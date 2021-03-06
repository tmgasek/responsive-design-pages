import styles from '../styles/Recipe.module.css';
import Image from 'next/image';
import { IoRestaurantOutline, IoTimeOutline } from 'react-icons/io5';

export default function RecipePage() {
  return (
    <div className={styles.container}>
      <h1>Classic Cheesecake Recipe</h1>
      <p>
        Look no further for a creamy and ultra smooth classic cheesecake recipe!
        Paired with a buttery graham cracker crust, no one can deny its simple
        decadence. For the best results, bake in a water bath.
      </p>
      <div className={styles.imgWrapper}>
        <Image
          src="/recipe/photo1.png"
          width={1938}
          height={940}
          alt="cheesecake"
        ></Image>
      </div>

      <div className={styles.main}>
        <div className={styles.body}>
          <h3>Ingredients</h3>
          <p>
            <em>Graham Cracker Crust</em>
          </p>
          <ul className={styles.ingredientList}>
            <li>
              <input type="checkbox"></input>1 and 1/2 cups (150g) graham
              cracker crumbs (about 10 full sheet graham crackers)
            </li>
            <li>
              <input type="checkbox"></input>5 Tablespoons (70g) unsalted
              butter, melted
            </li>
            <li>
              <input type="checkbox"></input>1/4 cup (50g) granulated sugar
            </li>
          </ul>
          <p>
            <em> Cheesecake </em>
          </p>
          <ul className={styles.ingredientList}>
            <li>
              <input type="checkbox"></input>four 8-ounce blocks (904g) full-fat
              cream cheese, softened to room temperature
            </li>
            <li>
              <input type="checkbox"></input>1 cup (200g) granulated sugar
            </li>
            <li>
              <input type="checkbox"></input>1 cup (240g) full-fat sour cream,
              at room temperature
            </li>
            <li>
              <input type="checkbox"></input>1 teaspoon pure vanilla extract
            </li>
            <li>
              <input type="checkbox"></input>2 teaspoons fresh lemon juice
              (optional, but recommended)
            </li>
            <li>
              <input type="checkbox"></input>3 large eggs, at room temperature
            </li>
            <li>
              <input type="checkbox"></input>topping suggestions: salted
              caramel, lemon curd, strawberry topping, chocolate ganache, red
              wine chocolate ganache, fresh fruit, whipped cream, or raspberry
              sauce (recipe in notes)
            </li>
          </ul>

          <h3>Instructions</h3>
          <ol className={styles.instructionList}>
            <li>
              Adjust the oven rack to the lower-middle position and preheat oven
              to 350??F (177??C).
            </li>
            <li>
              Make the crust: Using a food processor, pulse the graham crackers
              into crumbs. Pour into a medium bowl and stir in sugar and melted
              butter until combined. (You can also pulse it all together in the
              food processor.) Mixture will be sandy. Press firmly into the
              bottom and slightly up the sides of a 9-inch or 10-inch springform
              pan. No need to grease the pan first. I use the bottom of a
              measuring cup to pack the crust down tightly. Pre-bake for 8
              minutes. Remove from the oven and place the hot pan on a large
              piece of aluminum foil. The foil will wrap around the pan for the
              water bath in step 4. Allow crust to slightly cool as you prepare
              the filling.
            </li>
            <li>
              Make the filling: Using a handheld or stand mixer fitted with a
              paddle attachment, beat the cream cheese and granulated sugar
              together on medium-high speed in a large bowl until the mixture is
              smooth and creamy, about 2 minutes. Add the sour cream, vanilla
              extract, and lemon juice then beat until fully combined. On medium
              speed, add the eggs one at a time, beating after each addition
              until just blended. After the final egg is incorporated into the
              batter, stop mixing. To help prevent the cheesecake from deflating
              and cracking as it cools, avoid over-mixing the batter as best you
              can.
            </li>
            <li>
              Prepare the simple water bath (see note) Boil a pot of water. You
              need 1 inch of water in your roasting pan for the water bath, so
              make sure you boil enough. I use an entire kettle of hot water. As
              the water is heating up, wrap the aluminum foil around the
              springform pan. Pour the cheesecake batter on top of the crust.
              Use a rubber spatula or spoon to smooth it into an even layer.
              Place the pan inside of a large roasting pan. Carefully pour the
              hot water inside of the pan and place in the oven. (Or you can
              place the roasting pan in the oven first, then pour the hot water
              in. Whichever is easier for you.)
            </li>
            <li>
              Bake cheesecake for 55-70 minutes or until the center is almost
              set. When it???s done, the center of the cheesecake will slightly
              wobble if you gently shake the pan. Turn the oven off and open the
              oven door slightly. Let the cheesecake sit in the oven in the
              water bath as it cools down for 1 hour. Remove from the oven and
              water bath, then cool cheesecake completely at room temperature.
              Then refrigerate the cheesecake for at least 4 hours or overnight.
            </li>
            <li>
              Use a knife to loosen the chilled cheesecake from the rim of the
              springform pan, then remove the rim. Using a clean sharp knife,
              cut into slices for serving. For neat slices, wipe the knife clean
              and dip into warm water between each slice.
            </li>
            <li>
              Serve cheesecake with desired toppings. Cover and store leftover
              cheesecake in the refrigerator for up to 5 days.
            </li>
          </ol>
        </div>

        <div className={styles.overview}>
          <div className={styles.overviewItem}>
            <div className={styles.icon}>
              <IoRestaurantOutline size="2rem" />
            </div>
            <div>
              <p className={styles.overviewItemTxt}>YIELDS</p>
              <p className={styles.overviewItemValue}>12 servings</p>
            </div>
          </div>

          <div className={styles.overviewItem}>
            <div className={styles.icon}>
              <IoTimeOutline size="2rem" />
            </div>
            <div>
              <p className={styles.overviewItemTxt}>PREP TIME</p>
              <p className={styles.overviewItemValue}>45 mins</p>
            </div>
          </div>

          <div className={styles.overviewItem}>
            <div className={styles.icon}>
              <IoTimeOutline size="2rem" />
            </div>
            <div>
              <p className={styles.overviewItemTxt}>COOK TIME</p>
              <p className={styles.overviewItemValue}>1 hr</p>
            </div>
          </div>

          <div className={styles.overviewItem}>
            <div className={styles.icon}>
              <IoTimeOutline size="2rem" />
            </div>
            <div>
              <p className={styles.overviewItemTxt}>TOTAL TIME</p>
              <p className={styles.overviewItemValue}>7,75 hrs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
