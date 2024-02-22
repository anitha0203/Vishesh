import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import "./ContactForm.css";
import FireBaseDatabase from '../FireBaseConfig/FireBaseConfig';
import 'firebase/firestore';
import 'firebase/firestore';
import { addDoc, collection } from 'firebase/firestore';



function ContactForm(props) {
    const formData = {
        Viewer_Name: ".",
        Viewer_E_Mail: ".",
        Viewer_Message: ".",
        Viewer_Company_Or_Organization_Name: "."
    }

    const values = {
        Viewer_Name: "",
        Viewer_E_Mail: "",
        Viewer_Message: "",
        Viewer_Company_Or_Organization_Name: ""
    }

    const [getFormData, setFormData] = useState(formData);
    const [getValues, setValues] = useState(values);

    const ValidateAndSend = () => {

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const tempFormData = getFormData;
        var count = 0;
        for (let viewerKey in getFormData) {
            console.log(viewerKey);
            if (getFormData[viewerKey] === ".") {

                // console.log(obj);
                tempFormData[viewerKey] = "";

            }
            else if (viewerKey === "Viewer_E_Mail") {

                if (emailPattern.test(getFormData[viewerKey])) {
                    count++;
                }
                else {
                    tempFormData[viewerKey] = "";
                }
            }
            else {
                count++;
            }
        }
        if (count === 4) {
            StoreInFiresBase(tempFormData);
            setValues({ ...values });
            setFormData({ ...formData });

        }
        else {
            setFormData({ ...tempFormData });

            console.log(getFormData);
        }



    };
    const StoreInFiresBase = (viewerData) => {
        const dbRef = collection(FireBaseDatabase, "viewers");

        addDoc(dbRef, viewerData)
            .then((res) => {
                // console.log(res);

                alert("sent!");
            })
    }

    return (
        <Container fluid className='ContactForm-container'>
            <Row>
                <div className='ContactForm-container-row-col-1'>
                    <div>
                        <h6 className='ContactForm-h6'>It happens with us. We would love to hear from you.</h6>
                    </div>
                </div>

                <div className='ContactForm-container-row-col-2'>
                    <div className='ContactForm-form-container'>
                        <form action=""  >
                            <div className='ContactForm-field-container'>
                                <div >
                                    <p className='ContactForm-field-lable'>Your Name</p>
                                </div>
                                <div>
                                    <input type="text" value={getValues.Viewer_Name} style={{ borderColor: getFormData.Viewer_Name === "" && '#f08989' }} className='ContactForm-field-input' onChange={(e) => { setFormData({ ...getFormData, Viewer_Name: (e.target.value) }); setValues({ ...getValues, Viewer_Name: (e.target.value) }) }} />
                                </div>
                            </div>
                            <div className='ContactForm-field-container'>
                                <div >
                                    <p className='ContactForm-field-lable' >E-mail</p>
                                </div>
                                <div>
                                    <input type="email" value={getValues.Viewer_E_Mail} style={{ borderColor: getFormData.Viewer_E_Mail === "" && '#f08989' }} className='ContactForm-field-input' onChange={(e) => { setFormData({ ...getFormData, Viewer_E_Mail: (e.target.value) }); setValues({ ...getValues, Viewer_E_Mail: (e.target.value) }) }} />
                                </div>
                            </div>
                            <div className='ContactForm-field-container'>
                                <div >
                                    <p className='ContactForm-field-lable' >Company/Organization Name</p>
                                </div>
                                <div>
                                    <input type="text" value={getValues.Viewer_Company_Or_Organization_Name} style={{ borderColor: getFormData.Viewer_Company_Or_Organization_Name === "" && '#f08989' }} className='ContactForm-field-input' onChange={(e) => { setFormData({ ...getFormData, Viewer_Company_Or_Organization_Name: (e.target.value) }); setValues({ ...getValues, Viewer_Company_Or_Organization_Name: (e.target.value) }) }} />
                                </div>
                            </div>
                            <div className='ContactForm-field-container'>
                                <div >
                                    <p className='ContactForm-field-lable'>How Can We Help You</p>
                                </div>
                                <div>
                                    <textarea type="text" value={getValues.Viewer_Message} style={{ borderColor: getFormData.Viewer_Message === "" && '#f08989' }} className='ContactForm-field-textarea' onChange={(e) => { setFormData({ ...getFormData, Viewer_Message: (e.target.value) }); setValues({ ...getValues, Viewer_Message: (e.target.value) }) }} />
                                </div>
                            </div>
                            <div className='ContactForm-field-container'>
                                <div className='ContactForm-field-button'>
                                    <button className='about-us-btn' type='button' onClick={ValidateAndSend}>Submit</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </Row>
        </Container>
    );
}

export default ContactForm;