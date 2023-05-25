$(document).ready(function () {

    $("#imagePlaceholder").html("<img src='Images/tribe.png'>");
    $("#headingPlaceholder").html("<h2>Tribe</h2>");
    $("#textPlaceholder").html("<p>The tribe, or galang in atayal language is the basic unit in Atayal society. Traditionally the tribe is a group of people who are blood related and live in the same area, completing rituals, hunting and labour together. Each tribe has a chief, a council of elders and land ownership. A tribal alliance within an area is known as a mulaxen galang and is formed in order to resist enemies.</p>");
    $("#image1").css({ "border-style": "solid", "border-width": "10px", "border-color": "black" })


    $("#image1").on("click", function () {

        $("#imagePlaceholder").html("<img src='Images/tribe.png'>");
        $("#headingPlaceholder").html("<h2>Tribe</h2>");
        $("#textPlaceholder").html("<p>The tribe, or galang in atayal language is the basic unit in Atayal society. Traditionally the tribe is a group of people who are blood related and live in the same area, completing rituals, hunting and labour together. Each tribe has a chief, a council of elders and land ownership. A tribal alliance within an area is known as a mulaxen galang and is formed in order to resist enemies.</p>");
        $("#image1").css({ "border-style": "solid", "border-width": "10px", "border-color": "black" })
        $("#image2").css("border-style", "none")
        $("#image3").css("border-style", "none")
        $("#image4").css("border-style", "none")
        $("#image5").css("border-style", "none")
    
    })

    $("#image2").on("click", function () {

        $("#imagePlaceholder").html("<img src='Images/maho.jpeg'>");
        $("#headingPlaceholder").html("<h2>Ancestral Spirit Ritual</h2>");
        $("#textPlaceholder").html("<p>Maho is held each year after the millet festival, between August and October, and family members hunt for meat for the ritual and prepare millet cakes and millet wine. On the day of the ritual the men gather before dawn and the descendants of each ancestor send representatives to give offerings of the prepared foods. During the ritual the ancestral spirits are called to enjoy the offerings and pray for plentiful hunting yields. After the ritual the people step over a fire to symbolise the separation from the ancestral spirits.</p>");
        $("#image2").css({ "border-style": "solid", "border-width": "10px", "border-color": "black" })
        $("#image1").css("border-style", "none")
        $("#image3").css("border-style", "none")
        $("#image4").css("border-style", "none")
        $("#image5").css("border-style", "none")
    })

    $("#image3").on("click", function () {

        $("#imagePlaceholder").html("<img src='Images/smyatu.jpeg'>");
        $("#headingPlaceholder").html("<h2>Sowing Festival</h2>");
        $("#textPlaceholder").html("<p>Smyatu is an Atayal sowing festival. The two families with the largest crop yield from the previous year send a representative to be ritual masters. During the ritual, the ritual masters bring millet cakes and wine to the farmland, and do not talk to anyone on the way. At the farmland four holes are dug and seeds are planted within, blessing the farmland with a plentiful harvest. A prayer is said and the offerings left, before the ritual masters move on to the next farmland. During the sowing festival every household must keep a fire glowing, and must not borrow or lend fire to others.</p>");
        $("#image3").css({ "border-style": "solid", "border-width": "10px", "border-color": "black" })
        $("#image1").css("border-style", "none")
        $("#image2").css("border-style", "none")
        $("#image4").css("border-style", "none")
        $("#image5").css("border-style", "none")


    })

    $("#image4").on("click", function () {
        $("#imagePlaceholder").html("<img src='Images/divination.jpeg'>");
        $("#headingPlaceholder").html("<h2>Divination Bird</h2>");
        $("#textPlaceholder").html("<p>The divination bird or <q>sinsin<q> is used in atayal culture to predict good or bad omen. When Atayal warriors went out to hunt, a village ritual was held or a wedding was happening, the divination bird<q>s song was listened to carefully. If the bird<q>s mating call <q>shee shee<q> could be heard, it would symbolise good results for whatever was happening as there was no danger around. If however the bird produced its anxious <q>zi zi<q> call or flew overhead in panic it would show their was danger around and be a bad omen for the days events</p>");
        $("#image4").css({ "border-style": "solid", "border-width": "10px", "border-color": "black" })
        $("#image1").css("border-style", "none")
        $("#image2").css("border-style", "none")
        $("#image3").css("border-style", "none")
        $("#image5").css("border-style", "none")


    })


    $("#image5").on("click", function () {

        $("#imagePlaceholder").html("<img src='Images/knowledge.jpeg'>");
        $("#headingPlaceholder").html("<h2>Knowledge inheritance</h2>");
        $("#textPlaceholder").html("<p>Passing on knowledge from generation to generation is a very important practice within Atayal culture. The legends and festivals of the tribes are a mixture of beliefs and traditional life. Through passing on knowledge, ancestors have taught people how to sow seeds, cultivate land, share harvest and meat, thank the spirits of ancestors and pray for good fortune. They believe in not over hunting or over cultivating and that the worship of ancestors protects their ecological balance. Through passing on their knowledge between generations Atayal culture is kept strong.</p>");
        $("#image5").css({ "border-style": "solid", "border-width": "10px", "border-color": "black" })
        $("#image1").css("border-style", "none")
        $("#image2").css("border-style", "none")
        $("#image3").css("border-style", "none")
        $("#image4").css("border-style", "none")
    })

})