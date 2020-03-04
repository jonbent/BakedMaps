export const fetchSearchResults = (query, {lat, lng}) => (
  $.ajax({
    url: `https://api-g.weedmaps.com/discovery/v1/search?q=${query}&latlng=${lat}%2C${lng}&filter%5Btypes%5D%5B%5D=category&filter%5Btypes%5D%5B%5D=listing&filter%5Btypes%5D%5B%5D=brand&filter%5Btypes%5D%5B%5D=product&filter%5Bbounding_radius%5D=30mi&page_size=24`,
    method: "GET",
    dataType: "JSON"
  })

);

export const findDispensaries = ({ lat, long, mileRadius }) => {
  return $.ajax({
    url: `https://api-g.weedmaps.com/discovery/v1/listings?filter%5Bbounding_radius%5D=${mileRadius}mi&filter%5Bbounding_latlng%5D=${lat}%2C${long}&page_size=100`,
    method: "GET",
    dataType: "JSON"
  });
};
export const findBoundingBoxDispensaries = ({ lat1, long1, lat2, long2, filter = "" }) => {
  return $.ajax({
    url: `https://api-g.weedmaps.com/discovery/v1/listings?filter%5Bbounding_box%5D=${lat1}%2C${long1}%2C${lat2}%2C${long2}&page_size=100&page=1${filter}`,
    method: "GET",
    dataType: "JSON"
  });
};

export const fetchBakery = (bakerySlug, bakeryType = "dispensaries") => {
  if (bakeryType === "bakeries") bakeryType = "dispensaries";
  return $.ajax({
    url: `https://api-g.weedmaps.com/discovery/v1/listings/${bakeryType}/${bakerySlug}`,
    method: "GET",
    dataType: "JSON"
  })
}
export const fetchMenuItem = (bakerySlug, bakeryType = "dispensaries", menuItemSlug) => {
  if (bakeryType === "bakeries") bakeryType = "dispensaries";
  return $.ajax({
    url: `https://api-g.weedmaps.com/discovery/v1/listings/${bakeryType}/${bakerySlug}/menu_items/${menuItemSlug}`,
    method: "GET",
    dataType: "JSON"
  })
}
export const fetchBakeriesFromFollowings = (followings) => {
  let promises = [];
    followings.forEach(following => {
      let bakeryType = following.bakeryType
      if (bakeryType === "bakeries") bakeryType = "dispensaries";
      promises.push(
          $.ajax({
            url: `https://api-g.weedmaps.com/discovery/v1/listings/${bakeryType}/${following.bakeryTag}`
          })
        )
  })
  return Promise.all(promises).then(values => {
    return values.map(bakery => bakery.data.listing)
  })
}
// export const fetchBakeriesFromFollowings = (followings) => {
//     synchronousFetchBakeries(followings).then(res => console.log(res));
// }

export const fetchMenuItems = (dispensarySlug, bakeryType="dispensaries", filter = "") => {
  if (bakeryType === "bakeries") bakeryType = "dispensaries";
  return $.ajax({
    url: `https://api-g.weedmaps.com/discovery/v1/listings/${bakeryType}/${dispensarySlug}/menu_items?${filter}`,
    method: "GET",
    dataType: "JSON"
  });
};

export const fetchAddresses = (searchTerm) => {
  // https://api-g.weedmaps.com/wm/v1/geocode?query=23&proximity=-122.3014%2C37.9154&include=region
  return $.ajax({
    url: `https://api-g.weedmaps.com/wm/v1/geocode?query=${searchTerm}`,
    method: "GET",
    dataType: "JSON"
  })
};

export const fetchReviewableDistribution = (reviewableSlug, reviewableType) => {
  return $.ajax({
    url: `https://api-g.weedmaps.com/wm/v1/reviews?reviewable_id=${reviewableSlug}&reviewable_type=${reviewableType}&page=1&page_size=1&include=distribution`,
    method: "GET",
    dataType: "JSON"
  })
}

export const bakeryNames = [
  "Ahead of Bread",
  "Awake & Bake",
  "Babycakes",
  "Bake Awake",
  "Baked",
  "Baked Bites",
  "Bakers Delight",
  "Balance of Flour",
  "Batter Spatter",
  "Best Thing Since Sliced Bread",
  "Blends of Flour",
  "Blissful Bites",
  "Born and Bread",
  "Bottom of the Flour",
  "Bread & Butter",
  "Bread Ahead",
  "Bread and Batter",
  "Bread and Custards",
  "Bread and Peanut Butter",
  "Breadline",
  "Breadsmith",
  "Break Bread",
  "Budding Tastes",
  "Bun Boutique",
  "Buns in the Oven",
  "Buns of Steel",
  "Cake Bakes",
  "Cake Break",
  "Cake Couture",
  "Cake Outbreak",
  "Cake Zone",
  "Cake a Diem",
  "Cake's Sake",
  "Cake's at Stake",
  "Cake-A-Licious",
  "Cakes and Ale",
  "Cakewalk",
  "Cakewalkers",
  "Cakey Bakey",
  "Chateau Dough",
  "Cocoa Nutter",
  "Coffee Break 'n Cake",
  "Commandough",
  "Common Scents",
  "Cookie-Clutter",
  "Cookie-Cutter",
  "Cookoo for Cookies",
  "Creamy Creations",
  "Creative Treats",
  "Crumbs",
  "Crumbs and Bites",
  "Crunchy Crumbles",
  "Cups and Cakes",
  "Cut the Cake",
  "Dough Business",
  "Dough Re Mi",
  "Dough must go on",
  "Dough of Hands",
  "Doughing Pains",
  "Doughy Delights",
  "Dripping Drizzles",
  "Emergency Cake",
  "Finest Flour",
  "Flour Down",
  "Flour Girl",
  "Flour Leaves",
  "Flour Meadough",
  "Flour Play",
  "Flour Power",
  "Flour Up",
  "Flours for Hours",
  "Fondante's Inferno",
  "For Flours on End",
  "For Goodness Cakes",
  "Fresh from the Oven",
  "Ginger Snapped",
  "Give and Cake",
  "Glazed and Glorious",
  "Gluteus Maximus",
  "Gluteus Minimus",
  "Glutton for Punishment",
  "Grains of Scents",
  "Great Buns",
  "Happy Flour",
  "Have Your Cake & Eat It",
  "Hearts and Flours",
  "Hot Buns",
  "Hour of the Bread",
  "Icing on the Cake",
  "Irresistible Indulgence",
  "Ivory Flour",
  "Knead Bread?",
  "Knead for Sweets",
  "Knead to Know",
  "Let Them Eat Cake",
  "Loaf Oaf",
  "Love Flour",
  "Love of Loaves",
  "Luscious Layers",
  "Lush & Luscious",
  "Lust for Flour",
  "Mad Batters",
  "Makes Scents",
  "Mayflour",
  "Monster Cookies",
  "More Flour to You",
  "Muffin Top",
  "Naturally Delicious",
  "One-Man Dough",
  "Oven Lovin'",
  "Path of Crumbs",
  "Piece of Cake",
  "Piece of the Pie",
  "Premier Cakes",
  "Prime Dough",
  "Quakey Cakeys",
  "Raisin Dough",
  "Rise of the Buns",
  "Risk it for a Biscuit",
  "Rolling Scones",
  "Scents Time Immemorial",
  "Scents of Humor",
  "Sensational Goodies",
  "Sifted Gifts",
  "Sinful Temptations",
  "Sixth Scents",
  "Slow Dough",
  "Smell the Flours",
  "Snack Rack",
  "Snack Shack",
  "Snackamuffins",
  "Sprinkles of Joy",
  "Status Dough",
  "Steal the Dough",
  "Sugar Beat",
  "Sugar Bliss",
  "Sweet Beat",
  "Sweet Cakes",
  "Sweet Cheeks",
  "Sweet Dreams",
  "Sweet Sensations",
  "Sweetie Pies",
  "Sweets and Such",
  "Swirls and Pearls",
  "Take the Cake",
  "Takes the Cake",
  "Taste of Heaven",
  "The Cake is a Pie",
  "The Confection Connection",
  "The Cookie Cook",
  "The Cookie Rookie",
  "The Cooling Rack",
  "The Dough Below",
  "The Dough Flow",
  "The Flour Tower",
  "The Fruitcake",
  "The Glaze Maze",
  "The Glaze Phase",
  "The Grateful Bread",
  "The Mistledough",
  "The Pastry Corner",
  "The Pastry Sheet",
  "The Secret Ingredient",
  "The Shadough",
  "The Sweet Spot",
  "The Torpedough",
  "There's Nothing Batter",
  "Those Buns Dough",
  "Tiers of Delight",
  "Tiers of Joy",
  "Tokens of my Confection",
  "Top of the Flour",
  "Top of the Muffin",
  "Torte Reform",
  "Tough Cookies",
  "Tout de Sweet",
  "Up the Cakes",
  "Wakey Bakey",
  "Wallflour",
  "We Knead Dough",
  "We Take the Cake",
  "Wee Flours",
  "Whisk it for a Biscuit",
  "Whoopie Cakes",
  "Witching Flours",
  "You Take the Cake"
];