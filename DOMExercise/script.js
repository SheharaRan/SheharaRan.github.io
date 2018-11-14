function totalNumOfPTags()
{
    var ptags = document.getElementsByTagName("p");
     alert("The total number of paragraph tags in the document is: " + ptags.length)
}

function totalNumOfPTagsFirst()
{
    var fptags = document.getElementById("firstdiv").getElementsByTagName("p");
     alert("The total number of paragraph tags in the first div is: " + fptags.length)
}

function totalNumOfPTagsSecond()
{
    var sptags = document.getElementById("seconddiv").getElementsByTagName("p");
     alert("The total number of paragraph tags in the second div is: " + sptags.length)
}