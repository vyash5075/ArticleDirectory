import { Injectable, EventEmitter } from '@angular/core';
import { Article } from '../shared/article.model';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  searchkeyword=new EventEmitter<string>();
  categorySelection=new EventEmitter<string>();
  editArticle=new EventEmitter<number>();
  resetList=new EventEmitter<string>();
  /*public articles:Article[]=[
    new Article('Beet Hummus Recipe','This recipe for beet hummus is a fun and delicious way to enhance and improve this amazing mediterranean spread. Infused with colorful beets, this hummus tastes as good as it looks.The slight sweetness of the beets mixes very well with the nutty, spicy, and citrusy flavors in the hummus. Follow the recipe below and enjoy!',
    'food',
    'https://img.ehowcdn.com/630x/clsd/1/22/6368003dbccc441794b757b239009d93.jpg','KRISTAN RAINES',
    'When I was a little girl I discovered my love for baking, and it has remained a passion of mine ever since. Cooking lets my creativity run wild; a few simple ingredients can be turned into a meal that can express love, spark a memory, or set the stage for a lovely gathering. So I created The Broken Bread, a place where I could share my love for seasonal baking and cooking.',
    '31-1-2020','If the hummus appears too thick, simply blend in a few teaspoons of chickpea liquid until desired texture is achieved.',
    [new Thing('food processor'),
  new Thing('baking sheet'),
  new Thing('tin foil'),
  new Thing('2 small beets (about 7 oz), tops removed and scrubbed'),
  new Thing('1 can chickpeas, drained and liquid reserved'),
  new Thing('4 tbs tahini'),
  new Thing('1 garlic clove'),
  new Thing('2 tsp olive oil, plus extra for drizzling'),
  new Thing('3/4 tsp cumin'),
  new Thing('chickpeas, optional garnish'),
  new Thing('assorted veggies and pita slices, for serving'),
  ],
  [new Step('Heat oven to 400°F, with the rack arranged in the center. Drizzle each beet with a little olive oil, and place each one on a square piece of tin foil. Wrap the beets tightly in the tin foil, then place on a baking sheet. Roast for 30-40 minutes, or until the beets are fork tender.',
  'https://img.ehowcdn.com/630x/clsd/1/22/9cb2ffa50ce54040a2eb2afe94dd17ff.jpg'),
  new Step('Once beets have cooled, rub their skin off with a paper towel. Roughly chop the beets, then add them to a food processor along with the chickpeas, tahini, garlic, 2 tsp olive oil, juice from 1/2 a lemon, cumin and salt.',
  'https://img.ehowcdn.com/630x/clsd/1/22/27e29f6435274132a22321c612024847.jpg'),
  new Step('Process everything together for 2-3 minutes, or until smooth. Taste and season with additional salt and lemon juice as needed.',
  'https://img.ehowcdn.com/630x/clsd/1/22/15eb856d5b064eca8b203050e79128e0.jpg'),
  new Step('Transfer the beet hummus to a bowl and garnish with a few chickpeas and a light sprinkle of sumac. Serve with pita or sliced veggies and enjoy right away.',
  'https://img.ehowcdn.com/630x/clsd/1/22/7f331a8e2a4e41d3a93a230790b3e2f4.jpg'),
],
  ),








  new Article('DIY Pineapple Nail Art','Summer is the perfect time to indulge in tropical nail art — its the perfect theme for vacations, holidays and special occasions! Novelty designs are great fun to paint and never fail to draw attention. This pineapple design is on trend and easier than you may imagine to paint. Ill show you how to create this look in a few easy steps!',
  'fashion',
  'https://img.ehowcdn.com/630x/ppds/c538b8de-169b-4be1-a971-6fc57c16dde9.jpg','CAROLINE BURKE',
  'Caroline Burke is the founder of the DIY and craft blog burkatron. Burkes creative passion started at school when she began to experiment with painting and textiles. After graduating with a Bachelor of Arts in fine arts from Central Saint Martins she began creating contemporary DIY projects influenced by her love of modern interiors and minimal design.',
  '17-4-2017','Before you start coating your nails with polish, keep in mind that you only need three strokes to cover your nail.',
  [new Thing('White, yellow, brown and green nail polishes'),
new Thing('Fine nail art or painters brush'),
new Thing('Nail polish remover (for cleaning)'),
],
[new Step('Paint a base coat. Ive opted to use white here, but pastels are a good choice too! Let dry.',
'https://img.ehowcdn.com/630x/ppds/8a79fd68-5190-419e-b878-f8c0cbb80b28.jpg'),
new Step('Take a yellow polish and paint small yellow ovals onto each nail. This will be the pineapple body.',
'https://img.ehowcdn.com/630x/ppds/368c4176-b58c-4540-8573-72c9704cae53.jpg'),
new Step('Dip a fine brush into brown nail polish and stroke lines in a crosshatch pattern over the pineapple body. Repeat on all nails, then clean the brush with nail polish remover.',
'https://img.ehowcdn.com/630x/ppds/2c3ca32f-5b14-4355-929b-730d60631f21.jpg'),
new Step('Dip a fine brush into green nail polish and brush on 3–4 light strokes to create the spiky pineapple leaves. Repeat on all nails to finish!',
'https://img.ehowcdn.com/630x/ppds/f08cf679-3839-4b4d-8a52-322cdadabd24.jpg'),
],
),










new Article('Remove Scratches From Silverware','Silverware can become scratched up over time, and removing those scratches can help your silverware last much longer without rusting or becoming tarnished. The good news is, you can easily remove scratches from silverware using two household ingredients and water!',
'home-decor',
'https://img.ehowcdn.com/630x/clsd/5/22/35d371dce3394835bd4300c3133ba2f1.jpg','JESSICA KIELMAN',
'Jessica owns two blogs, Mom 4 Real and Pour Me a Cocktail. She has been sharing easy cleaning tips, recipes and ideas with her readers for over 7 years. She has been featured on the Rachel Ray Show, TODAY Parenting, MSN, Country Woman Magazine and more.',
'30-5-2019','It’s important to remove excess food as quickly as possible after eating as the salt and acids will cause gradual damage.',
[new Thing('1 cup of baking soda'),
new Thing('2 tablespoons of Castile soap'),
new Thing('a large bowl of water'),
new Thing('two clean cloths'),
],
[new Step('Make a paste by combining the baking soda and Castile soap.',
'https://img.ehowcdn.com/630x/clsd/5/22/e4b27aa7a8f84b27837a3b0045cc3d33.jpg'),
new Step('Dab a little of the cleaning paste onto a clean cloth and work it into the silverware. Wipe the paste on with the grain of the silverware, typically in an up and down motion.',
'https://img.ehowcdn.com/630x/clsd/5/22/98f5f0a76c1f48a4bdf94a4dbfe36c9d.jpg'),
new Step('Rinse each piece of silverware in cold water, making sure to remove all of the cleaning paste.',
'https://img.ehowcdn.com/630x/clsd/5/22/fe80c3f5f6e1461e8ae62fe3e054432c.jpg'),
new Step('Use a clean, soft cloth to polish each piece of silverware, going with the grain again. Your silverware will look like new and last much longer if you polish it at least once every few months.',
'https://img.ehowcdn.com/630x/clsd/5/22/18ccdcb2395c45d7baf0ad5ea35d66a8.jpg'),
],
),
















new Article('Split Pea Soup Recipe','Split pea soup is a classic dish thats the epitome of cozy and hearty. And while its often available in a can, nothing beats making it from scratch. All you need to do is toss the ingredients in a pot and simmer until the peas are soft. Top it off with chopped or shredded ham, or skip the meat for a vegetarian version. Either way, we think youll love this warm and comforting bowl of homemade goodness.',
'food',
'https://img.ehowcdn.com/630x/clsd/1/17/202f2636164f44b9a4647238e3842905.jpg','KIRSTEN NUNEZ',
'Kirsten Nunez is a lifestyle journalist and author focusing on food, health, and DIY projects. In May 2014, she published a craft book, "Studs & Pearls: 30 Creative Projects for Customized Fashion." Her work has appeared on websites such as Bustle, Brit + Co, DIY Lifestyle, and VegNews. She lives in Beacon, New York.',
'22-1-2020','Split peas and lentils do not require soaking. They take a short amount of time to cook',
[new Thing('2 tablespoons unsalted butter (or olive oil)'),
new Thing('1 cup yellow onion, diced'),
new Thing('2 large carrots, peeled and diced'),
new Thing(' '),
new Thing('3 teaspoons jarred minced garlic (or 2 minced garlic cloves)'),
new Thing('1 pound dried green split peas'),
new Thing('1 large potato, peeled and cubed'),
new Thing('Ham bone or 1/2 teaspoon smoked paprika'),
new Thing('Salt and pepper'),
],
[new Step('In a large pot over medium heat, warm the butter or olive oil. Add the diced onions, carrots and celery. Mix well and cook until the onions are clear and soft, about 5 to 7 minutes. Add the minced garlic and cook for another 30 seconds.',
'https://img.ehowcdn.com/630x/clsd/1/17/98633a236b0f436abf6c661961e53807.jpg'),
new Step('To the pot, add the split peas, spices and bay leaves.Mix until fully combined.',
'https://img.ehowcdn.com/630x/clsd/1/17/98633a236b0f436abf6c661961e53807.jpg'),
new Step('Add the broth and potatoes. If using ham bone, add it now. Mix well, bring to a boil then reduce the heat.',
'https://img.ehowcdn.com/630x/clsd/1/17/230dbc8e25e948c0842c14069e77b07a.jpg'),
new Step('Simmer uncovered for about 1 hour. As it cooks, occassionally check the soup. Skim off any foam then stir. As it nears one hour, the peas will soften and become creamy.',
'https://img.ehowcdn.com/630x/clsd/1/17/e8fdaf1fcf654618a7389aa62e8ceecd.jpg'),
new Step('When the soup reaches your desired consistency, mix in the ham, if using. Keep in mind that the soup will thicken considerably as it cools. Simmer for another 10 to 15 minutes then turn off the heat.',
'https://img.ehowcdn.com/630x/clsd/1/17/cda22a663a0c48ddb0c7a337facc0e63.jpg'),
],
),














new Article('Sweet Potato Nachos Recipe','Nachos are pretty much always delicious, but are just as often not so healthy. This recipe combines the great taste of this beloved snack without making you feel too guilty for indulging. Crispy, oven-baked sweet potato slices take the place of chips, and when mixed with cheese, beans, jalapeños and more, theyre just as good as any other basket of nachos youve ever had.',
'food',
'https://img.ehowcdn.com/630x/clsd/1/22/c9a7c977a5964ccba0c2b393f877a814.jpg','KRISTAN RAINES',
'When I was a little girl I discovered my love for baking, and it has remained a passion of mine ever since. Cooking lets my creativity run wild; a few simple ingredients can be turned into a meal that can express love, spark a memory, or set the stage for a lovely gathering. So I created The Broken Bread, a place where I could share my love for seasonal baking and cooking.',
'24-1-2020','To keep your nachos interesting from top to bottom, layer your ingredients more than once.',
[new Thing('2 baking sheets'),
new Thing('parchment paper'),
new Thing('2-3 small sweet potatoes, scrubbed and sliced into ¼ inch rounds'),
new Thing('1 tbs olive oil'),
new Thing('1/2 cup canned black beans, drained and rinsed'),
new Thing('1/2-3/4 cup shredded Mexican cheese'),
new Thing('1 jalapeño, de-seeded and thinly sliced'),
new Thing('sour cream or Mexican Crema, for drizzling'),
],                                                       
[new Step('Heat oven to 400°F. Arrange the rack in the center of the oven.Add the sweet potato slices to a large bowl and toss with the olive oil, salt and a few cracks of pepper; continue to toss to coat.',
'https://img.ehowcdn.com/630x/clsd/1/22/beff1c379123477f8d3093164e6fd1aa.jpg'),
new Step('Arrange the slices on two large baking sheets lined with parchment paper.',
'https://img.ehowcdn.com/630x/clsd/1/22/2928fb3aacb94fe3acb4c48ccc50560e.jpg'),
new Step('Place the pans in the oven and roast for 20 minutes. Flip and cook for an additional 5-10 minutes, or until the slices appear crisp.',
'https://img.ehowcdn.com/630x/clsd/1/22/58c25dfe659b40c4b18f41308ae3cd46.jpg'),
new Step('To assemble the nachos, transfer the sweet potato rounds to a medium cast iron skillet, or some other oven safe dish. Scatter the beans and cheese over the top and place back into the oven for about 5 minutes, or until the cheese has melted.',
'https://img.ehowcdn.com/630x/clsd/1/22/e9b8c301d5854160bf9b391e81c64ba6.jpg'),
new Step('Carefully remove from oven, garnish with remaining toppings and enjoy right away.',
'https://img.ehowcdn.com/630x/clsd/1/22/253c0861a3844ef2a24c8354c2337014.jpg'),
],
),


























new Article('DIY Natural Whitening Mint Toothpaste','Making your own natural whitening mint toothpaste is so easy to do, and you only need 3 ingredients that you may already have in your pantry. This toothpaste is non-toxic and extremely safe to use to whiten your teeth without harsh chemicals found in many store-bought products.',
'crafts',
'https://img.ehowcdn.com/630x/clsd/8/29/89470696b6df44d693d5c180f626374d.jpg','JESSICA KIELMAN',
'Jessica owns two blogs, Mom 4 Real and Pour Me a Cocktail. She has been sharing easy cleaning tips, recipes and ideas with her readers for over 7 years. She has been featured on the Rachel Ray Show, TODAY Parenting, MSN, Country Woman Magazine and more.',
'12-9-2019','Keep in mind that your homemade toothpaste won’t contain fluoride.',
[new Thing('1/2 cup coconut oil (room temperature, not melted)'),
new Thing('4 tablespoons baking soda'),
new Thing('15 drops of peppermint essential oil'),
],
[new Step('Place 1/2 cup of coconut oil in a bowl. The coconut oil should be room temperature. If the coconut oil is cold, its going to be very hard to mix with the other ingredients. If the coconut oil is melted, it may not thicken back up to form a paste.',
'https://img.ehowcdn.com/630x/clsd/8/29/7d404738038a4c9f8cd42cb0a2dbf7d3.jpg'),
new Step('Add 4 tablespoons of baking soda.',
'https://img.ehowcdn.com/630x/clsd/8/29/72b43eaea0b649b6b2fdfaa0ff93bc22.jpg'),
new Step('Add 15 drops of peppermint essential oil.',
'https://img.ehowcdn.com/630x/clsd/8/29/1c0a6e5e00334de891ec671d917b4c71.jpg'),
new Step('Mix well and store in an airtight container.',
'https://img.ehowcdn.com/630x/clsd/8/29/96310da15fba45a58d3fb5f7eae92333.jpg'),
],
),



















new Article('DIY Non-Toxic Mouthwash Recipe','Store-bought mouthwashes often contain lots of ingredients and sometimes even toxic chemicals. If you are looking for more natural, non-toxic ingredients in your mouthwash, heres how to easily make your own with just a few ingredients that you may already have in your pantry.',
'crafts',
'https://img.ehowcdn.com/630x/clsd/8/29/8626acf206a3445695ced5dff28f0b4c.jpg','JESSICA KIELMAN',
'Jessica owns two blogs, Mom 4 Real and Pour Me a Cocktail. She has been sharing easy cleaning tips, recipes and ideas with her readers for over 7 years. She has been featured on the Rachel Ray Show, TODAY Parenting, MSN, Country Woman Magazine and more.',
'12-9-2019','Shake well before each use. There are no chemical binders in this mouthwash recipe, so the baking soda will most likely sink to the bottom.',
[new Thing('2 cups of distilled water'),
new Thing('2 tablespoons of baking soda'),
new Thing('8 drops of peppermint essential oil'),
new Thing('8 drops of tea tree essential oil'),
],
[new Step('Add 2 tablespoons of baking soda to 2 cups of distilled water.',
'https://img.ehowcdn.com/630x/clsd/8/29/ad002df0f7234a22a2076f8031400c08.jpg'),
new Step('Add 8 drops of peppermint essential oil.',
'https://img.ehowcdn.com/630x/clsd/8/29/67303af4523b45f6b0ff3d17f1becd50.jpg'),
new Step('Add 8 drops of tea tree essential oil.',
'https://img.ehowcdn.com/630x/clsd/8/29/0c6aed82866744569f940a98b4b71aea.jpg'),
new Step('Store the mouthwash in an airtight container like a glass jar or bottle.',
'https://img.ehowcdn.com/630x/clsd/8/29/fdd73185b23342b38e7fdf431c75b749.jpg'),
],
),






















new Article('Lemon Artichoke Skillet Chicken Recipe','When I need a great recipe for a quick-but-healthy weeknight meal, I reach for the cast iron skillet. The way it renders fat leaving behind crispy skin and juicy chicken is nothing short of miraculous, delicious and healthy — such a win/win! This recipe is great if you arent on a diet at all, but it also fits for all your loved ones who are dairy free, gluten free, paleo and even those Whole30 people! Its also perfect for just a busy person who wants a great meal.',
'food',
'https://img.ehowcdn.com/630x/clsd/1/6/c24f71da71f24c9494d6d10034948793.jpg','JACKIE DODD',
'Jackie Dodd’s beer-infused​ recipes earned her a spot as a finalist for Saveur Magazines Best Original Recipes, as well as the ​crowned winner for Best Beer Coverage. her website, The Beeroness, was also a finalist for Better Homes and Gardens Best Food Blogs. She has been seen on The Today Show, Lifetime Network, CBS News, and NBC. She is also the author of The Craft Beer Cookbook and the Craft Beer Bites Cookbook.',
'15-1-2020','This method of using a cold pan and low heat renders more fat, and makes the skin super crispy. If the skin sticks to the pan, dont worry — it will release once it has browned, given that your skillet is properly seasoned.',
[new Thing('2 lbs chicken thighs (bone in, skin on) about 6'),
new Thing('1 teaspoon salt'),
new Thing('1 teaspoon pepper'),
new Thing('1 cup chicken broth'),
new Thing('2 tablespoons cornstarch (or tapioca flour)'),
new Thing('1 small lemon, thinly sliced and seeded'),
new Thing('1 (15oz) can quartered artichoke hearts in water, drained'),
],
[new Step('Season the chicken on all sides with salt and pepper. Put in a cast iron skillet, off heat, skin side down.Add to medium-heat, cooking until the skin has browned and the fat has rendered, 15 to 20 minutes then flip the chicken over. Use a splatter guard if you have one.',
'https://img.ehowcdn.com/630x/clsd/1/6/3435990de0a24aa587db86e2197e3871.jpg'),
new Step('While the chicken cooks, make the sauce. Stir together the chicken broth and cornstarch, then stir in the olive oil, garlic powder, onion powder and honey mustard. Then add the lemon slices.',
'https://img.ehowcdn.com/630x/clsd/1/6/67fe030419f04d3a855a241a72b833dd.jpg'),
new Step('Pour off the fat that has rendered (this method will render a considerable amount of fat) then add the sauce to the pan.',
'https://img.ehowcdn.com/630x/clsd/1/6/456b8bf066ba4d81b290002a820d3249.jpg'),
new Step('Add the artichoke hearts and simmer over medium heat until the chicken is cooked through and the sauce has thickened, about 6 minutes.',
'https://img.ehowcdn.com/630x/clsd/1/6/f9ecc60d44ad4f0186d64d0209059275.jpg'),
new Step('Top with chopped parsley. Serve and enjoy!',
'https://img.ehowcdn.com/630x/clsd/1/6/bb23887176334a06908665adb55f7be4.jpg'),
],
),















new Article('DIY T-Shirt Yarn Wall Hanging','Would you like to add some texture and color to one of your walls? Are your drawers and closets overflowing with old t-shirts? Are you trying to live a more no-waste lifestyle? Then youre in luck. Dont throw away your old shirts — create this stylish wall hanging with yarn made from them instead. Trifecta! Use t-shirt yarn just like regular yarn. You can knit, crochet, make a latch hook rug, and even create this trendy wall hanging with t-shirt yarn. Your friends and family will be surprised to know this started out as some old pullovers.',
'crafts',
'https://img.ehowcdn.com/630x/clsd/2/5/060781a170ae4271bd1a1a0d0aafc177.jpg','BETH HUNTINGTON',
'Beth is founder and designer of The Renegade Seamstress, a blog known for its simple , stylish, and straightforward refashion tutorials. She wants to teach and inspire even the most inexperienced sewists to try this environmentally friendly and economical way to transform thrift store finds into fashionable pieces of clothing that can be worn anywhere.',
'6-2-2020','Depending on the weight of what youre hanging, sometimes simple tape can do the trick!',
[new Thing('Various colors of t-shirt yarn'),
new Thing('Sharp scissors'),
new Thing('Measuring tape'),
new Thing('Dowel rod or branch'),
],
[new Step('Cut t-shirt yarn into 64-inch pieces.',
'https://img.ehowcdn.com/630x/clsd/2/5/0c46393dc375406cb8f5a3fd70f7ac21.jpg'),
new Step('Place the strips of yarn into your desired color design.',
'https://img.ehowcdn.com/630x/clsd/2/5/c53c598637c94a138dfd0e9263012958.jpg'),
new Step('Fold the strip of t-shirt yarn in half and wrap the loop around the top of the branch.',
'https://img.ehowcdn.com/630x/clsd/2/5/752f88fd5248474698d2d811cee08c94.jpg'),
new Step('Continue to loop each piece of the t-shirt yarn around the branch until you have created your desired design.',
'https://img.ehowcdn.com/630x/clsd/2/5/32915d2ef6644c92b3ce5b9e25e6b687.jpg'),
new Step('Cut a 25-inch piece of t-shirt yarn and tie it to each end of the branch.',
'https://img.ehowcdn.com/630x/clsd/2/5/84fc1ed07b1e4d0a86d51d9ad01e6e93.jpg'),
],
),


















new Article('How to Turn Any Photo Into a Paint','Give your brain a break and create some beautiful art with a paint by number you made yourself. Upload one of your special photos and turn it into your very own paint by numbers project. Its a fun, relaxing and personalized way to create some new art for your home.',
'crafts',
'https://img.ehowcdn.com/630x/clsd/2/10/b149f675d82447b19c400cecacf2e534.jpg','BETH HUNTINGTON',
'Beth is founder and designer of The Renegade Seamstress, a blog known for its simple , stylish, and straightforward refashion tutorials. She wants to teach and inspire even the most inexperienced sewists to try this environmentally friendly and economical way to transform thrift store finds into fashionable pieces of clothing that can be worn anywhere.',
'13-2-2020','The only rule you have is to relax, lose yourself in the page and lay down some color',
[new Thing('Computer'),
new Thing('Printer'),
new Thing('Canvas paper'),
new Thing('Paints'),
new Thing('Brushes'),
],
[new Step('Go to PBNify.com and click on the browse button to upload a photo.',
'https://img.ehowcdn.com/630x/clsd/2/10/f6b194eca03249d285432cf566637de1.jpg'),
new Step('Click on the different colors in the photo to create a color palette.',
'https://img.ehowcdn.com/630x/clsd/2/10/2c193ef599244eeb9256193d51744bd7.jpg'),
new Step('Click the PBNify button to create a paint by number template.',
'https://img.ehowcdn.com/630x/clsd/2/10/0fa9acdc635f44f7b4528611d85328f2.jpg'),
new Step('Save the outline and palette, then print them out.',
'https://img.ehowcdn.com/630x/clsd/2/10/37031560f53b4afca789e352b3630939.jpg'),
new Step('Match the paints with the color palette.',
'https://img.ehowcdn.com/630x/clsd/2/10/b8546e79a4414a05b3a243736f76c44d.jpg'),
],
),


















new Article('Rustic Rataouille Recipe','Ratatouille is a classic French dish thats packed with vegetables. There are many variations, but it often features tasty ingredients like eggplant, zucchini and garlic. You can toss the veggies into a stew or layer them on top of tomato sauce, just like we did in the following recipe. After you bake the vegetables and add fresh herbs, theyll pair perfectly with pasta or rice.',
'food',
'https://img.ehowcdn.com/630x/clsd/2/9/485ed07e2acd4c93a92236bd42a97109.jpg','KIRSTEN NUNEZ',
'Kirsten Nunez is a lifestyle journalist and author focusing on food, health, and DIY projects. In May 2014, she published a craft book, "Studs & Pearls: 30 Creative Projects for Customized Fashion." Her work has appeared on websites such as Bustle, Brit + Co, DIY Lifestyle, and VegNews. She lives in Beacon, New York.',
'14-2-2020','Its best to use vegetables that are about the same width. But since this isnt always possible, you can trim the vegetables to size.',
[new Thing('28 ounces canned crushed tomatoes'),
new Thing('1 medium red bell pepper, deseeded and diced'),
new Thing('1 medium white or yellow onion, diced'),
new Thing('2 tablespoons fresh basil, chopped'),
new Thing('2 teaspoons fresh thyme, chopped'),
new Thing('3 medium zucchini, sliced'),
new Thing('2 to 3 baby eggplants (or 1 large standard eggplant), sliced'),
new Thing('Balsamic vinegar'),
],
[new Step('Preheat the oven to 375° Fahrenheit. In a large pot over medium heat, warm the olive oil. Cook the onion and red bell pepper for 5 to 7 minutes, or until the onion is tender and translucent. Add the minced garlic and cook for another 30 seconds.',
'https://img.ehowcdn.com/630x/clsd/2/9/4c6bd39bf7ad43c8b8f8ac060ffc8872.jpg'),
new Step('Add the canned tomatoes and fresh herbs. Mix well and cook for 2 to 3 minutes.',
'https://img.ehowcdn.com/630x/clsd/2/9/814bddedf2cc480daa3462c7326bdfb5.jpg'),
new Step('Carefully transfer the tomato sauce to a greased 9x13" casserole dish.',
'https://img.ehowcdn.com/630x/clsd/2/9/a0373edc899d4dc99d59ff3d0ddc3788.jpg'),
new Step('Place the sliced vegetables into a dish, stacking them in a horizontal layer. Continue until the dish is full.',
'https://img.ehowcdn.com/630x/clsd/2/9/f360dd23684e4643994c5c7eebcf652c.jpg'),
new Step('Drizzle balsamic vinegar on top of the vegetables.',
'https://img.ehowcdn.com/630x/clsd/2/9/c58fb238052d4356af529a67dcde883e.jpg'),
new Step('Bake for 45 to 55 minutes, or until the sauce is bubbling and the vegetables are browned. Garnish with fresh herbs and serve with pasta, rice or quinoa. For even more flavor, top the dish with goat cheese.',
'https://img.ehowcdn.com/630x/clsd/2/9/453d52bf7b5e4274b50846f98a913039.jpg'),
],
),


















new Article('Old-Fashioned Chocolate Chess Pie','Chocolate chess pie is a rich Southern classic. It tastes like brownie in a crust, thanks to its fudgy filling made of evaporated milk, cocoa powder and eggs. If youre an avid baker, you might even already have all the ingredients on hand! Top it off with whipped cream and chocolate shavings for a dessert every chocolate lover will adore. There are also many ways to make this classic recipe; heres our go-to version.',
'food',
'https://img.ehowcdn.com/630x/clsd/2/7/ba314f00a66a4bdd8dcd621c6c71baf0.jpg','KIRSTEN NUNEZ',
'Kirsten Nunez is a lifestyle journalist and author focusing on food, health, and DIY projects. In May 2014, she published a craft book, "Studs & Pearls: 30 Creative Projects for Customized Fashion." Her work has appeared on websites such as Bustle, Brit + Co, DIY Lifestyle, and VegNews. She lives in Beacon, New York.',
'14-2-2020','If you prefer a sweeter pie, add another 1/4 cup of sugar. But if youd like to cut back on the sweetness, use just 1 cup of sugar (or even less).',
[new Thing('1 9-inch pre-prepared or homemade pie crust'),
new Thing('15 ounces evaporated milk'),
new Thing('1/4 cup unsweetened cocoa powder'),
new Thing('1 1/4 cups granulated sugar'),
new Thing('2 tablespoons corn starch or all-purpose flour'),
new Thing('1 teaspoon vanilla extract'),
new Thing('1/4 cup unsalted butter, melted'),
new Thing('2 eggs, lightly beaten'),
],
[new Step('Preheat the oven to 350° Fahrenheit. In a large bowl, combine the cocoa powder, sugar, flour and salt. Stir until combined.',
'https://img.ehowcdn.com/630x/clsd/2/7/72710e3a0e9c40498c517b8b954f2b0d.jpg'),
new Step('Add the evaporated milk, melted butter and vanilla extract.',
'https://img.ehowcdn.com/630x/clsd/2/7/709d7de9bd4a4f6d86688d79f64a9c9f.jpg'),
new Step('Add the eggs. Mix well.',
'https://img.ehowcdn.com/630x/clsd/2/7/ae6f50527117427d80f760e038e56dd1.jpg'),
new Step('Press the pie crust into a pie dish, making sure the edges are secure. You can use a fork to press the edges into place. Carefully pour the chocolate filling into the crust.',
'https://img.ehowcdn.com/630x/clsd/2/7/e2ddfa3d2ed34b21b6adb2bc6074dbe1.jpg'),
new Step('Bake for 45 to 50 minutes or until the crust is golden brown. Let cool completely before slicing and serving. After the pie reaches room temperature, you can pop it in the refrigerator to chill.',
'https://img.ehowcdn.com/630x/clsd/2/7/3a960ebc95434640b989cde8eb7435c8.jpg'),
],
),

];*/

  public articles:Article[]=[];

  getRandomArticle() {
    return Math.floor(Math.random()*this.articles.length);
  }

  setArticles(articles:Article[]) {
    this.articles=articles;
  }

  getArticle(index:number) {
    return this.articles[index];
  }

  addArticle(article:Article) {
    this.articles.push(article);
  }

  updateArticle(index:number,newarticle:Article) {
    this.articles[index]=newarticle;
  }

  deleteArticle(index:number) {
    this.articles.splice(index,1);
  }
}
