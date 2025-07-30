// A COMPOSITION ABOUT MYSELF
let name = "Thompson";
let age = 17;
let school = "The University Of Port Harcourt";
let department = "Petroleum & Gas Engineering";
let facaulty = "Engineering";
let familyMembers = ["Mr. & Mrs Daniel & Blessing Okolo", ["Justus", "Wisdom", " and Precious"]];
let siblings = familyMembers[1].join(", ");
let surname = "Daniel";
let favouriteColour = "Blue";
let hobbies = ["programming", "reading", "watching movies", "and swimming"]
let headerText = "A LETTER TO MYSELF";
let date = "Sunday, 27th July, 2025.";
let address = `Camp David, Camp David Street,
<br>
Off UDSS, ALUU, Choba Junction,<br>
Obiakpor LGA.,<br>
Port Harcourt,<br>
Rivers State,<br>
Nigeria.
<br>
${date}`;
let dear = `Dear ${name},`;
let footerText = "Yours Sincerely";
let composition = `My name is ${name} ${surname}, I am ${age} years old.
I am a student of ${school}, and my department is ${department} which is clearly in the facaulty of ${facaulty}.
<br><br>
My Parents are: ${familyMembers[0]} and My Siblings are: ${siblings}. They are really amazing and unique, I couldn't have hoped for more.
<br><br>
Back to myself, my favourite colour is ${favouriteColour} and my hobbies are: ${hobbies.join(", ")}.
Everyday I aspire to be better.
<br><br>
`;

let header = document.getElementById("header");
let body = document.getElementById("body");
let footer = document.getElementById("footer");
let valet = document.getElementById("valet");
let demo = document.getElementById("demo");


header.textContent = headerText;
demo.innerHTML = address;
valet.innerHTML = dear;
body.innerHTML = composition;
footer.textContent = `${footerText}, ${name}.`;