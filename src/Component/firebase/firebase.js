// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.4.0/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/8.4.0/firebase-firestore.js"></script>

// // <!-- TODO: Add SDKs for Firebase products that you want to use
// //      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.4.0/firebase-analytics.js"></script>

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: "AIzaSyBYk3RvaWAxPv-p7oyj3JZn2UenG6fVrZA",
	authDomain: "cookbook-001.firebaseapp.com",
	projectId: "cookbook-001",
	storageBucket: "cookbook-001.appspot.com",
	messagingSenderId: "829552561174",
	appId: "1:829552561174:web:d8d2fe072d2625bcf17937",
	measurementId: "G-2GN8XGEB0J",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

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

let allRecipe = {};

const getAllData = () => {
	firebase
		.firestore()
		.collection("Recipees")
		.orderBy("time", "desc")
		.get()
		.then((snap) => {
			if (snap.empty) console.log("No Data");
			else {
				snap.forEach((recipee) => {
					allRecipe.push(recipee);
				});
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


// Saves a new message containing an image in Firebase.
// This first saves the image in Firebase storage.
function saveImageMessage(file) {
  // Posts a new image as a message.
  firebase.firestore().collection('messages').add({
    imageUrl: LOADING_IMAGE_URL,
  }).then(function(messageRef) {
    // 2 - Upload the image to Cloud Storage.
    var filePath = firebase.auth().currentUser.uid + '/' + messageRef.id + '/' + file.name;
    return firebase.storage().ref(filePath).put(file).then(function(fileSnapshot) {
      // 3 - Generate a public URL for the file.
      return fileSnapshot.ref.getDownloadURL().then((url) => {
        // 4 - Update the chat message placeholder with the image's URL.
        return messageRef.update({
          imageUrl: url,
          storageUri: fileSnapshot.metadata.fullPath
        });
      });
    });
  }).catch(function(error) {
    console.error('There was an error uploading a file to Cloud Storage:', error);
  });
}


export default getAllData;
export default getSingleData;
export default addData;
