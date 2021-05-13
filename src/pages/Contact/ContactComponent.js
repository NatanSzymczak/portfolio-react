import React, {PureComponent} from 'react';
import Page from '../../components/Page/Page';
import Paragraf from '../../components/Paragraf/Paragraf';
import FormContainer from '../../components/FormContainer/FormContainer';
import Input from '../../components/Input/Input';
import Textarea from '../../components/Textarea/Textarea';
import Button from '../../components/Button/Button';
import ButtonContainer from '../../components/ButtonContainer/ButtonContainer';
import FormField from '../../components/FormField/FormField';

export default class ContactComponent extends PureComponent {
   
   isFormValid = () => {
      const {userName, userEmail, userMessage} = this.props;
      const errors = {};
      if(userName.length === 0){
         if(userName.length === 0){
            errors.name = 'First name is required';
         } else if(userName.length < 3){
            errors.name = 'The name is too short';
         }
      }
      
      if(userEmail.length === 0){
         errors.email = 'E-mail is required';
      }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
         errors.email = 'The-mail is incorrect';
      }
      
      if(userMessage.length === 0){
         errors.message = 'Message is required';
      }else if (userMessage.length < 3) {
         errors.message = 'The message is too short';
      }
      return errors;
   }

   sendForm = () => {
      const errors = this.isFormValid();
      if(!errors.message && !errors.email && !errors.name ){
         console.log('Send a message !');
      }
   }

   render() {
      const {userName, userEmail, userMessage, changeForm} = this.props;
      const errors = this.isFormValid();
      return (
         <Page title="Contact">
            <Paragraf>
               There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </Paragraf>
            <FormContainer>
               <FormField 
                  label="First Name" 
                  isEmpty={userName.length === 0}
                  errorMessage={errors.name}
               >
                  <Input 
                     value={userName}
                     onChange={changeForm}
                     name="name"
                  />
               </FormField>
               <FormField label="Email Address" isEmpty={userEmail.length === 0}>
                  <Input 
                     value={userEmail}
                     onChange={changeForm}
                     name="email"
                     isInvalid={!!errors.name}
                  />
               </FormField>
               <FormField label="Message" isEmpty={userMessage.length === 0}>
                  <Textarea 
                     value={userMessage}
                     onChange={changeForm}
                     name="message"
                  />
               </FormField>
               <ButtonContainer>
                  <Button onClick={this.sendForm}>Send</Button>
               </ButtonContainer>
            </FormContainer>
         </Page>
      );
   }
}