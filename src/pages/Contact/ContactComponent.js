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
   
   render() {
      const {userName, userEmail, userMessage, changeForm} = this.props;
      return (
         <Page title="Contact">
            <Paragraf>
               There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </Paragraf>
            <FormContainer>
               <FormField label="First Name" isEmpty={userName.length === 0}>
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
                  <Button>Send</Button>
               </ButtonContainer>
            </FormContainer>
         </Page>
      );
   }
}