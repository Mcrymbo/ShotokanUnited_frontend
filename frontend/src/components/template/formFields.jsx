const loginFields=[
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]

const signupFields=[
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"First name",
        labelFor:"first-name",
        id:"first_name",
        name:"first_name",
        type:"text",
        autoComplete:"first name",
        isRequired:false,
        placeholder:"first name"   
    },
    {
        labelText:"last_name",
        labelFor:"last_name",
        id:"last_name",
        name:"last_name",
        type:"text",
        autoComplete:"Last Name",
        isRequired:false,
        placeholder:"Last Name"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirm-password",
        id:"confirm-password",
        name:"confirm-password",
        type:"password",
        autoComplete:"confirm-password",
        isRequired:true,
        placeholder:"Confirm Password"   
    },
    {
        labelText:"Profile image",
        labelFor:"profile_image",
        id:"profile_image",
        name:"profile_image",
        type:"file",
        autoComplete:"",
        isRequired:false,
        // placeholder:"Confirm Password"   
    }
]

const eventField = [
    {
        labelText:"Event Name",
        labelFor:"name",
        id:"name",
        name:"name",
        type:"text",
        autoComplete:"Event name",
        isRequired:true,
        placeholder:"Event Name"   
    },
    {
        labelText:"Venue",
        labelFor:"venue",
        id:"venue",
        name:"venue",
        type:"text",
        autoComplete:"Event venue",
        isRequired:true,
        placeholder:"Venue"   
    },
    {
        labelText:"Date",
        labelFor:"date",
        id:"date",
        name:"date",
        type:"date",
        autoComplete:"2024-03-05",
        isRequired:true,
        placeholder:"yyyy-mm-dd"   
    },
    {
        labelText:"description",
        labelFor:"description",
        id:"description",
        name:"description",
        type:"text",
        autoComplete:"description",
        isRequired:true,
        placeholder:"Add description here"   
    },
    {
        labelText:"poster_image",
        labelFor:"poster_image",
        id:"poster_image",
        name:"poster_image",
        type:"file",
        autoComplete:"",
        isRequired:false,
        // placeholder:"Add description here"   
    }
]

export {loginFields,signupFields, eventField}