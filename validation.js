function init()
    {
        let inputNames = ["name", "email", "comment"]
        inputNames.forEach(x => document.getElementById(x).addEventListener("input", validate));
    }

    function validateFields(fieldId, errorId, fieldName, fieldLen, regex)
    {
        let errorElement = document.getElementById(errorId);
        errorElement.innerHTML = "";

        let name = document.getElementById(fieldId).value;
        let status = true;
        if(name == null || name == "")
        {
            errorElement.innerHTML = fieldName + " is required";
            status = false;
        }
        else if(name.length > fieldLen)
        {
            errorElement.innerHTML = fieldName + " is too long";
            status = false;
        }
        else if(!regex.test(name))
        {
            errorElement.innerHTML = fieldName + " has invalid format";
            status = false;
        }
        return status;
    }

    function validate()
    {
        var correctName = validateFields("name", "nameError", "Name", 20,  /^[A-Z][a-z]+(\s[A-Z][a-z]+)*$/);
        var correctEmail = validateFields("email", "emailError", "Email", 100,  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        var correctComment = validateFields("comment", "commentError", "Comment", 100, /^[A-Za-z0-9 -]*$/);
        if(correctEmail && correctName && correctComment)
        {
            document.getElementById("formBtn").disabled = false;
        }
        else
        {
            document.getElementById("formBtn").disabled = true;
        }
    }
    init();