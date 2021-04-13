
const getSingleData = async (id) => {
	const data = await firebase.firestore().collection("Recipees").doc(id).get();
	const RecipeTitle = data.get("title");
	const RecipeAuthor = data.get("author");
	const RecipePrepTime = data.get("prepTime");
	const RecipeImage = data.get("img");
	const RecipeIngredients = data.get("ingredients");
	const RecipeInstructions = data.get("steps");
	return (
		RecipeAuthor,
		RecipeImage,
		RecipeIngredients,
		RecipeInstructions,
		RecipePrepTime,
		RecipeTitle
	);
};

let allRecipe = [];

const getAllData = () => {
	db
		.collection("Recipees")
		.orderBy("time", "desc")
		.get()
		.then((snap) => {
			if (snap.empty) console.log("No Data");
			else {
				console.log(snap);
			}
		});
};

const addData = (
	titleval,
	prepTimeval,
	authorval,
	imgval,
	ingredientsval,
	stepsval
) => {
	firebase
		.firestore()
		.collection("Recipees")
		.add({
			title: titleval,
			prepTime: prepTimeval,
			author: authorval,
			img: imgval,
			ingredients: ingredientsval,
			steps: stepsval,
		})
		.then((result) => {
			console.log("Add Successfull" + result);
		})
		.catch((err) => {
			console.log("Error : " + err);
		});
};

export default getAllData;
export default getSingleData;
export default addData;
