export const POSTS = [
	{
		_id: "1",
		text: "Cool, Grok is #1 on Android!",
		img: "/posts/grok.jpg",
		user: {
			username: "johndoe",
			profileImg: "/avatars/boy1.png",
			fullName: "John Doe",
		},
		comments: [
			{
				_id: "1",
				text: "Nice Tutorial",
				user: {
					username: "janedoe",
					profileImg: "/avatars/girl1.png",
					fullName: "Jane Doe",
				},
			},
		],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
	},
	{
		_id: "2",
		text: "SDU top",
		user: {
			username: "johndoe",
			profileImg: "/avatars/boy2.png",
			fullName: "John Doe",
		},
		comments: [
			{
				_id: "1",
				text: "agree",
				user: {
					username: "janedoe",
					profileImg: "/avatars/girl2.png",
					fullName: "Jane Doe",
				},
			},
		],
		likes: [1, 2, 3, 4, 5, 6, 7],
	},
	{
		_id: "3",
		text: "Has anyone ever been in possession of or seen an actual $2 bill before?",
		img: "/posts/dollar.jpg",
		user: {
			username: "johndoe",
			profileImg: "/avatars/boy3.png",
			fullName: "John Doe",
		},
		comments: [],
		likes: [1, 2, 3, 4, 5, 6, 7],
	},
	{
		_id: "4",
		text: "her name is salad 😭",
		img: "/posts/cat.jpg",
		user: {
			username: "johndoe",
			profileImg: "/avatars/boy3.png",
			fullName: "John Doe",
		},
		comments: [
			{
				_id: "1",
				text: "super cute!!",
				user: {
					username: "janedoe",
					profileImg: "/avatars/girl3.png",
					fullName: "Jane Doe",
				},
			},
		],
		likes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
	},
];

export const USERS_FOR_RIGHT_PANEL = [
	{
		_id: "1",
		fullName: "Nurmek",
		username: "nurmek51",
		profileImg: "/avatars/boy2.png",
	},
	{
		_id: "2",
		fullName: "Askhat",
		username: "askhat137",
		profileImg: "/avatars/girl1.png",
	},
	{
		_id: "3",
		fullName: "Aitore",
		username: "italianmoose",
		profileImg: "/avatars/boy3.png",
	},
	{
		_id: "4",
		fullName: "Omar",
		username: "sup",
		profileImg: "/avatars/girl2.png",
	},
];