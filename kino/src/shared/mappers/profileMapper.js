


export function mapFormToPayload({form}) {
    const payload = {
        fullName:form.fullName, 
        mobileNumber:form.mobile,
        dateOfBirth:form.dob,
        preferredVenueId:1, 
        avatar:"",
    }
    console.log("payload:")
    console.log(payload)
    return payload
}