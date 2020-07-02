const chats = 
[{
	img:"1.jpg",
	user:"AHA",
	lastMessage:"helllo,world!",
	isOnline:true
},
{	img:"2.jpg",
	user: "Maksim",
	lastMessage: "ignor",
	isOnline:true

},
{	img:"3.jpg",
	user:"AHA",
	lastMessage:"ok",
	isOnline:true
},
]
const container=document.querySelector (".inner")
chats.forEach(chat => 
	{	const elem= document.createElement("div")
		elem.classList.add("new")
		const element=document.createElement("div")
		element.classList.add("chat")
		const name= document.createElement("span")
		name.classList.add("name")
		name.innerHTML=chat.user

		const lastmessage = document.createElement("span")
		lastmessage.classList.add("last-message")
		if(chat.isOnline)
		{
			const online = document.createElement("span")
			online.classList.add("online")
			online.innerHTML="Online"
			name.appendChild(online)
		}
		const $avatar = document.createElement ("img")
		$avatar.src = chat.img
		$avatar.classList.add("avatar")
		element.appendChild($avatar) 

		lastmessage.innerHTML=chat.lastMessage
		elem.appendChild(name)
		elem.appendChild(lastmessage)
		element.appendChild(elem)
		container.appendChild(element)

	} )