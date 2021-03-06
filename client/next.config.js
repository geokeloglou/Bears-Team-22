const withCss = require("@zeit/next-css");

const stage = process.env.NODE_ENV || "production";

module.exports = withCss({
	publicRuntimeConfig: {
		credentials: {
			apiKey: "AIzaSyCpU4SIDfsgqZ2bBaoDaQza4I-0fsocfR8",
			authDomain: "react-firebase-85039.firebaseapp.com",
			databaseURL: "https://react-firebase-85039.firebaseio.com",
			projectId: "react-firebase-85039",
			storageBucket: "react-firebase-85039.appspot.com",
			messagingSenderId: "55358337129"
		},
		apiUrl: stage === "production" ? "http://knowl-knowl-ciw3basidwqs-321112760.eu-central-1.elb.amazonaws.com" : "http://localhost:5000"
	}
});
