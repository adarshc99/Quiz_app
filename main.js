var questions_object = [

    {
        "question":"Which of these best describes an array?",
        "options":
        {
            "1":"A data structure that shows a hierarchical behavior",
            "2":"Container of objects of similar types",
            "3":" Arrays are immutable once initialised",
            "4":"Array is not a data structure"
        },
        "correct_option":"2"
    },
    {
        "question":"How do you initialize an array in C?",
        "options":
        {
            "1":"int arr[3] = (1,2,3);",
            "2":"int arr(3) = {1,2,3};",
            "3":"int arr[3] = {1,2,3};",
            "4":"int arr(3) = (1,2,3);"
        },
        "correct_option":"3"
    },
    {
        "question":"How do you instantiate an array in Java?",
        "options":
        {
            "1":"int arr[] = new int(3);",
            "2":"int arr[];",
            "3":"int arr[] = new int[3];",
            "4":"int arr() = new int(3);"
        },
        "correct_option":"3"
    },
    {
        "question":"Which of the following is the correct way to declare a multidimensional array in Java?",
        "options":
        {
            "1":"int[] arr;",
            "2":" int arr[[]];",
            "3":" int[][]arr;",
            "4":" int[[]] arr;"
        },
        "correct_option":"3"
    }

];
function ans_given_inslize(get_size) // for inslizing array with undefined ,based on length of question
{
    let temp_array = [];
    for(let i=0;i<get_size;i++)
    {
        temp_array[i] = undefined;
    }
    return temp_array;

}
var ans_given = ans_given_inslize(questions_object.length); // for storing ans 
function start_test()
{
    document.getElementsByClassName("start_button").item(0).style.display = "none";
    document.getElementsByClassName("container").item(0).style.display = "grid";

}
var index_question = 0;
function Next_question()
{
    if(index_question<questions_object.length)
    {
        document.getElementsByClassName("question").item(0).innerText = questions_object[index_question]["question"];
        document.getElementById("1").value = questions_object[index_question]["options"]["1"];
        document.getElementById("2").value = questions_object[index_question]["options"]["2"];
        document.getElementById("3").value = questions_object[index_question]["options"]["3"];
        document.getElementById("4").value = questions_object[index_question]["options"]["4"];
        document.getElementById("question_number").innerHTML = ("Question Number "+(index_question+1)+`/${questions_object.length}`);
        index_question+=1;
    }
    else{
        document.getElementById("direction_right").style.background = "#eee";
    }

    
}
function Previous_question()
{
    if(index_question>1)
    {
        index_question-=2;
        document.getElementsByClassName("question").item(0).innerText = questions_object[index_question]["question"];
        document.getElementById("1").value = questions_object[index_question]["options"]["1"];
        document.getElementById("2").value = questions_object[index_question]["options"]["2"];
        document.getElementById("3").value = questions_object[index_question]["options"]["3"];
        document.getElementById("4").value = questions_object[index_question]["options"]["4"];
        document.getElementById("question_number").innerHTML = ("Question Number "+(index_question+1)+`/${questions_object.length}`);
        index_question+=1;
    }

}
function check_array_value(get_value)
{
    return get_value!=undefined;
}
function ans_pass(get_id)
{
    ans_given[index_question-1] = get_id;
    if(ans_given.every(check_array_value))
    {
        document.getElementById("submit_id").disabled = false;
        document.getElementById("submit_id").style.background = "black";
        document.getElementById("submit_id").style.color = "cyan";
    }
    console.log(ans_given);
   
}
function show_result()
{
    document.getElementsByClassName("submit_text_enabled").item(0).style.display = "grid";
    document.getElementsByClassName("container").item(0).style.display = "none";
    let correct_ans = 0;
    for(let i=0;i<questions_object.length;i++)
    {
        if(questions_object[i]["correct_option"] == ans_given[i])
        {
            correct_ans+=1;
        }
    }
    document.getElementsByClassName("result").item(0).innerText = `${correct_ans}/${questions_object.length}`;
}




