import * as _ from 'lodash';

const sceneConfig: Phaser.Scenes.Settings.Config = {
  active: false,
  visible: false,
  key: 'Game',
};

export class GameScene extends Phaser.Scene {
  constructor() {
    super(sceneConfig);
  }

  public create() {
    // this.add.image(window.innerWidth / 2, window.innerHeight / 2, 'sample');
    this.createNewsTicker(0, window.innerHeight - 50);
  }

  public update() {
    // TODO
    // this.addStory(`Story ${this.counter}`);
    // this.counter++;
    this.updateStories();
  }

  private storyQueue: string[] = headlines;
  private storyDisplays: Array<{ text: string, textObject: Phaser.GameObjects.Text, posX: number }> = [];
  private tickerX: number;
  private tickerY: number;
  private createNewsTicker(x: number, y: number) {
    this.tickerX = x;
    this.tickerY = y;
    this.add.text(x, y, 'BREAKING NEWS');
    this.updateStories();
  }
  private readyToDisplayNextStory = true;
  private updateStories() {
    const y = this.tickerY + 20;
    const buildStory = this.readyToDisplayNextStory && (this.storyQueue.length > 0);
    if (buildStory) {
      const text = this.storyQueue.shift();
      this.storyDisplays.push({ textObject: this.add.text(window.innerWidth, y, text ), text, posX: window.innerWidth });
      this.readyToDisplayNextStory = false;
    }
    this.storyDisplays.forEach((story) => {
      story.textObject.destroy();
      story.posX -= 2;
      story.textObject = this.add.text(story.posX, y, story.text);
    });
    this.storyDisplays = this.storyDisplays.filter((story) => {
      const offScreen = story.textObject.displayWidth + story.posX < 0;
      if (offScreen) {
        story.textObject.destroy();
        return false;
      }
      return true;
    });
    const padding = 100;
    console.log('piece1', );
    console.log('piece2', )
    if (this.storyDisplays.length === 0 || _.last(this.storyDisplays).textObject.displayWidth + padding <  window.innerWidth - _.last(this.storyDisplays).posX) {
      this.readyToDisplayNextStory = true;
    }
  }

  private addStory(headline: string) {
    this.storyQueue.push(headline);
  }
}

const headlines = _.shuffle([
`50 Car Pile-Up Results In New City Sculpture`,
`9 Out Of 10 Sims Prefer Cranberry Jelly Over Preserves`,
`After 36 Years Of Marriage, Man Discovers Wife Is Actually A Rare Yucca Plant`,
`All Raccoons Cheat At Poker, Animal Researchers Say`,
`Ancient Meteorite Revealed To Be Burnt Burger`,
`Ball Lightning Destroys Toupee But Polishes Victim's Car`,
`Bark Art Exhibition By Bark Simson`,
`Big Game Bistro Opens Amid Animal Rights Protests`,
`Black And White Ball Disrupted By Bank Robbery`,
`Black And White Ball Preparations Underway`,
`Black And White Ball Raises Money For Charity`,
`Bongos Making Big Comeback Among Unemployed Steelworkers`,
`Bookstore Gets New Copies Of SimUlations: A Love Story`,
`Boy Saves Cat From Tree, Thousands Cheer`,
`Bread Baking Books Beat Bean Broiling`,
`Broccoli Discovered To Be Colonies Of Tiny Aliens With Murder On Their Minds`,
`Broccoli Found To Cause Grumpiness In Children`,
`Broccoli Pops Cereal Not As Popular As Presumed`,
`Broccoli Tops For Moms, Last For Kids; Dads Indifferent`,
`Building Turned Into Aviary After Birds Stick To New Paint`,
`Bus Misses Turn, Dozens Late For Work`,
`Cab Fares In city name To Increase; Sims Brace For Worst`,
`Cable Disruption Blamed For Rising Birthrates`,
`Cat Burglar Spotted, Mistaken For Dalmatian`,
`Cat Hijacks Municipal Bus; Riders Applaud Good Timing At Stops And Courteous Meows`,
`Cats Demand Longer Breaks, Cleaner Litter, Slower Mice`,
`Cauliflower-Lovers Won't Let Broccoli-Eaters March In Their Neighborhood`,
`Chefs Find Broccoli Effective Tool For Cutting Cheese`,
`Citywide Blood Drive Highlights SimHealth Week`,
`Hudsonville Baker Wins Pickled Crumpet Toss Three Years Running`,
`Hudsonville Baton Twirlers To Lead Local Parade`,
`Hudsonville Makes Top 10 List`,
`Hudsonville New Ticker: Important Things You Need To Know, More Or Less`,
`Hudsonville News Ticker: A Quiet Voice Of Reason In A Noisy World`,
`Hudsonville News Ticker: Accept No Substitutes`,
`Hudsonville News Ticker: Don't Blame Us If You're Not Paying Attention`,
`Hudsonville News Ticker: Don't Blame Us, We Just Report It`,
`Hudsonville News Ticker: Easier To Find Because It Moves`,
`Hudsonville News Ticker: For When You Have To Know But Would Rather Not`,
`Hudsonville News Ticker: If It's Important To You, It Probably Is To Us Too`,
`Hudsonville News Ticker: If You Read It Here, That Means It Happened`,
`Hudsonville News Ticker: Information At A Readable Speed`,
`Hudsonville News Ticker: Information That's A Luxury, Not A Necessity`,
`Hudsonville News Ticker: Information With As Few Words As Possible`,
`Hudsonville News Ticker: Journalistic Integrity Without All The Advertising`,
`Hudsonville News Ticker: Just One Piece Of Information After Another`,
`Hudsonville News Ticker: Left To Right Through Aesthetic Design`,
`Hudsonville News Ticker: No Advertisements Since Before The Beginning`,
`Hudsonville News Ticker: Not For The Faint Of Heart`,
`Hudsonville News Ticker: Not Too Fast, Not Too Slow, Just Right`,
`Hudsonville News Ticker: Pretty Darn Accurate Most Of The Time`,
`Hudsonville News Ticker: Properly Spelled Words From Beginning To End`,
`Hudsonville News Ticker: Sometimes We're Just Here To Make You Smile`,
`Hudsonville News Ticker: Where We Report On Busses, Not Buses`,
`Hudsonville News Ticker: Your Total Information Source`,
`Hudsonville Racewalkers Win All-City Title`,
`Hudsonville Society Gather To Honor Visiting Potentate, Exchange Kitties`,
`Hudsonville Tourist Bureau Launches City Beautification Project`,
`Hudsonville Phonebooks Print All Wrong Numbers; Results In 15 New Marriages`,
`Consider A Career In Garbage Collection`,
`Crime Lord Spotted In city name; Mayor Says "No Comment"`,
`Cross-Eyed Python Found To Be Running Successful Chain Of All-Night Laundromats`,
`Cure For Senility Found, But Lost Before Being Recorded`,
`Daily Special At Restaurant Found To Be Big Fat Lie`,
`Ditzy Debutante Mistakes Broccoli Floret For Nosegay`,
`Don't Forget To Pick Up Your Litter`,
`Doughnuts: Is There Anything They Can't Do?`,
`Eagerly Awaited Llama Exhibition Coming Soon`,
`Eckelberry Marmalade May Cure Hiccups, Doctors Say`,
`Esoteric Verbosity Culminates In Communicative Ennui, Teachers Note`,
`Experts Advise Using Sunblock As Sunny Weather Continues`,
`Eyes Move While Reading Tickers, Scientists Speculate`,
`Famed Prognosticator Warns "Disaster Awaits Us All"`,
`Floor Sweepings Found To Be Tangier Than Salt And Pepper`,
`For More Information, Send 9 Million Simoleons To The "Broccoli Education Foundation"`,
`Foreign Potentate Becomes Lost In city name, Refuses To Ask For Directions`,
`Former High School Principal Caught Licking Stamps Behind Post Office Counter`,
`Four In Five city name Children Won't Eat Mono-Colored Cereals`,
`French Kissing Leads To Higher Croissant Use, Authorities Warn`,
`Fresh Fruit In Season Is Berry, Berry Good`,
`Giant Hairball Has Perfect Grammar, Linguists Say`,
`Girl Rides Bicycle Across City Phone Wires; Arrested For Eavesdropping`,
`Gravy Tastes Better When Loudly Slurped; Scientists Baffled`,
`Gymnastics Program Growing By Leaps And Bounds`,
`Ham-Handedness Doesn't Lead To Higher Cholesterol, Researchers Declare`,
`"Hang Up And Drive" Say Citizens Against Cell Phones`,
`Heads Roll When Rollerblader Hits Tourist Group`,
`Here Comes The Sun`,
`House Made Entirely Of Broccoli Built In city name; Furniture Made Of Wheat Germ`,
`Humming Show Tunes Sure Sign Of Poor Motor Skills, Researchers Declare`,
`I Was Framed, Jokes Local Artist`,
`"I'm Just A Sim, Sim, Simple Guy" Rises To Top Of Charts`,
`If Tin Whistles Are Made Of Tin, What Do They Make Foghorns Out Of?`,
`Information Shown Here Frequently Absurd, Poll Indicates`,
`Lady's Knitting Circle Raises Cash For Homeless`,
`Linguistics Experts Discuss "Left To Right Or Right To Left; Is One Better?"`,
`Local Cop Found To Be Ticketing Only Lantern-Jawed Males`,
`Local Kindergartners Prefer Oi Brand Paste; Claim It Just Tastes Better`,
`Local Mustard Magnate Marries Daughter Of Dill Pickle Mogul`,
`Local Politicians Take Both Sides Of Issues, Little Accomplished`,
`Local Scientists Conclude: Kitties Like Fish, Dogs Less Picky`,
`Local Sim Bill Flopsby Heads County Commission On Snuggles And Hugs`,
`Local Sim Discovers Just Who Wrote Book Of Love`,
`Local Sim Mentioned In Out Of Town Newspaper; Starts Scrapbook`,
`Lou Turns Away Every Person Who Skips To Her; "They Have No Rhythm," She Says`,
`Lunar Eclipse Obscured By Clouds`,
`Lying Found To Be Effective Calorie Reducer`,
`Man Caught Shoplifting Spatulas; Thousands Of Flippers Found In Bedroom`,
`Man Discovers Neighbor Completely Enclosed In Mailbox; Returns Him For Postage`,
`Man Survives Wintry Night Adhered To Bus Bench By Chewing Gum`,
`Marathon! Sims Hit The Ground Running`,
`Mediums Agree Blue-Striped Socks No More Lucky Than Clovers Or Pennies`,
`Middle Age A Hoax, Declares Study; Turns Out To Be Bad Posture After All`,
`Miracle Lint Remover Based On Broccoli Juice Sweeps Market`,
`Molasses Truck Springs Leak; Sweetest Accident In Long Time`,
`Most Sims Ignore Tickers, Study Reveals`,
`Mrs. SimLeary Gets Prize Cow`,
`Mysterious Loud Rumbling Noises In city name Found To Be Mysterious Loud Rumblings`,
`Never Feed Broccoli To Your Dog, No Matter How Much He Begs`,
`Newspaper Boy Crime Ring Cracked: Read All Over`,
`Nutritionists Aver That Eating Broccoli Encourages Higher Bowling Scores`,
`Oliver "Slim Jim" Golonsky Wins city name Inter-Location Obstacle Race`,
`Ordinary Days In city name Become Common`,
`Original Magna Carta Found Written On Large Broccoli Stalk`,
`Pigeon Alert! Extreme Pigeon Danger!`,
`Pistol Packing Punks Pilfer Precious Petunias`,
`Pot-Bellied Pigs Named Bob Convention Highlight Of Season`,
`Psychic K.C. Edgars Predicts City To Grow`,
`Public Displays Of Affection Common Sight Near City Hall`,
`Public Service Message: Pooper Scoopers Urged When Walking Dogs`,
`Rap Music Causes Hangnails, Study Shows.`,
`Regional Catsup King Cousin To Tie Knot With Toothpick Tycoon`,
`Rock Star Spotted In Llama Fur Near Casa Del Sticky`,
`Rockin' Good Thrash Metal Found To Reverse Aging Process`,
`School Field Trip To Museum Sparks Interest In Local History`,
`Scientists Assert That Swearing Is Source Of Bad Breath`,
`Semicolon Declared Sexier Than Comma At Grammarian's Fete`,
`Shopping After Hours Source Of Purchase Embarrassment Says Survey`,
`Sim Offers To Let City Bus Run Him Over For Lifetime Salad Bar Privileges`,
`Sim Scientist Discovers Gravity While Falling Down Stairs`,
`SimFirefighters Wanted: Apply At Your Local Fire Station`,
`SimNation Report: Criminals Demand Cell Phones`,
`SimNation To Host Energy Symposium`,
`SimPolice Officers Wanted: Apply At Your Local Police Precinct`,
`SimScientist Discovers Abacus Can Be Used To Dry Towels`,
`SimScientist Discovers New Dry Cleaning Method Using Sparklers`,
`SimSurvey Reports Rise in Vegetarian Sims`,
`SimSurvey: "Cheese Louise" Voted Best Pizza Restaurant In city name`,
`SimSurvey: 3 Out Of 5 Sims Loathe Modern Art`,
`SimSurvey: 4 Out Of 5 Sims Prefer Hard Cheese To Brie`,
`SimSurvey: 4 Out Of 5 Sims Surveyed Find Surveys Satisfactory`,
`SimSurvey: 50% Of Sims Say YES`,
`SimSurvey: 80% Of Sims Hang Up On Telephone Solicitors`,
`SimSurvey: 80% Of Sims Love Clog-Dancing`,
`SimSurvey: Sims Sleep Seven Hours`,
`Sims Everywhere Agree: A Sound Financial Future Begins With Inheriting Lots Of Money`,
`Sims Everywhere Agree: All Sales Are Final`,
`Sims Everywhere Agree: Brush Before, After, And Between Meals`,
`Sims Everywhere Agree: For The Best In News Ticker Entertainment, The Picayune Can't Be Beat`,
`Sims Everywhere Agree: Frequent Saving Prevents File Loss`,
`Sims Everywhere Agree: Good Grooming Is Essential To Success`,
`Sims Everywhere Agree: History Laughs At Many People Who Deserved To Be Laughed At`,
`Sims Everywhere Agree: If You Throw A Stone, It Will Hit Something`,
`Sims Everywhere Agree: It's Not What You Make, It's What You Keep`,
`Sims Everywhere Agree: Past Performance Does Not Guarantee Future Returns`,
`Sims Everywhere Agree: Purring Kitties Are Happy Kitties`,
`Sims Everywhere Agree: The Egg Came First, But Only After The Chicken`,
`Sims Everywhere Agree: Vote Early, Vote Often`,
`Sims Everywhere Agree: Your Actual Costs May Vary`,
`Sims Flock To Grand Opening Of Betty's Bird Boutique`,
`Sims Report Widespread SimAnt Problem`,
`Skirmish At Writer's Workshop, Speaker Used Fighting Words`,
`Some Destruction, But Not Too Much, In Practical Joke Derby`,
`Spotted Owl Spotted`,
`Stand Up And Cheer If You Like SimCity`,
`Staring At Football-Shaped Bladders Good For Concentration, Researchers Proclaim`,
`Staring At Lapping Ocean Waves Makes You More Assertive During Lunch`,
`State Governor Found To Be Mule; "His Clothes Always Fit Funny," Says Aide`,
`Studies Show Most Sims Mispronounce "Zsdersw"`,
`Study Demonstrates That Singing In The Shower Makes Teeth Crooked`,
`Survey Shows Less Is More, More Or Less`,
`Swamp Gas Verified To Be Exhalations Of Stars--Movie Stars--Long Passed`,
`Tainted Broccoli Weapon Of Choice For Global Assassins`,
`Talking Broccoli Hosts Talk Show; Guests A "Bunch Of Vegetables"`,
`Tapped Out: Local Brewery Closes Its Doors.`,
`Ten Teachers With Cardiac Arrest After Students Declare Love Of Beowulf`,
`This Space For Rent`,
`Timmy Falls Down Well, Climbing Needs Work`,
`Tip Of The Day Provides Interesting Tidbits, Mayors Agree`,
`Today's Forecast: Cold, Cloudy, With Occasional Showers`,
`Today's Forecast: Sunny, High 70's, Winds From The East`,
`Today's Forecast: Windy And Cooler Than Yesterday`,
`Traveling Truck Technician Talks Transmissions Tuesday`,
`Tree Stuck In Cat; Firefighters Baffled`,
`Truckload Of Apples Overturns, city name Diner Offers Applesauce Special`,
`Typist Involved In Winter Traffic Accident, White-Out Conditions Blamed`,
`UFO Seen And Disavowed`,
`Unsalted Tortilla Chips Best Cure For Colds Says Health Nut`,
`"Weasels Are Warm And Wonderful" Day At city name Mall`,
`Weasel Rejected As city name's Crime-Fighting Mascot`,
`Weather Likely To Become Different Before Changing`,
]);