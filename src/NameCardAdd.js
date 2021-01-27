import React, { useState } from "react";
import NameCardList from "./NameCardList";
import { Button, Form, Card, Grid, Container, Label } from "semantic-ui-react";
import "./NameCardAdd.css";

const NameCardAdd = () => {
  const cardObj = {
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
  };
  const [cards, setCardList] = useState([]);
  const [card, setCard] = useState(cardObj);
  const { firstName, lastName, phone, address } = card;

  const addCard = () => {
    if (!disabledButton()) {
      setCardList([...cards, card]);
      restForm();
    }
    // setCardList([...cards, card]);
    // restForm();
  };

  const restForm = () => {
    setCard(cardObj);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCard({ ...card, [name]: value });
  };

  // there is another way to deal the situation where all input has no value, which is to disable "add card" button and the "add card" button is enabled when inputs are entered with values. Please see line 101 for this implementation.
  const disabledButton = () => {
    return !(
      firstName.length &&
      lastName.length &&
      phone.length &&
      address.length
    );
  };

  const phoneNumsValidator = (phoneNums) => {
    const phoneRegx = /^\d{10}$/;
    return phoneRegx.test(phoneNums);
  };

  return (
    <div>
      <Card fluid header="Name Card" className="nameCardHeader" />
      <Container fluid className="nameCardFormAndCardListContainer">
        <Form className="nameCardForm">
          <Grid columns="equal">
            <Grid.Column className="nameCardFormCol">
              <Form.Field>
                <label>First Name</label>
                <input
                  name="firstName"
                  onChange={handleChange}
                  value={firstName}
                />
                {firstName.length ? (
                  <Label color="blue">{firstName}</Label>
                ) : null}
              </Form.Field>
            </Grid.Column>
            <Grid.Column className="nameCardFormCol">
              <Form.Field>
                <label>Last Name</label>
                <input
                  name="lastName"
                  onChange={handleChange}
                  value={lastName}
                />
                {lastName.length ? (
                  <Label color="blue">{lastName}</Label>
                ) : null}
              </Form.Field>
            </Grid.Column>
            <Grid.Column className="nameCardFormCol">
              <Form.Field>
                <label>Phone</label>
                <input
                  name="phone"
                  type="tel"
                  onChange={handleChange}
                  value={phone}
                />
                {phone.length ? (
                  phoneNumsValidator(phone) ? (
                    <Label color="blue">{phone}</Label>
                  ) : (
                    <Label color="red">
                      Please enter a valid Phone Number
                    </Label>
                  )
                ) : null}
              </Form.Field>
            </Grid.Column>
            <Grid.Column className="nameCardFormCol">
              <Form.Field>
                <label>Address</label>
                <input name="address" onChange={handleChange} value={address} />
                {address.length ? <Label color="blue">{address}</Label> : null}
              </Form.Field>
            </Grid.Column>
            <Grid.Column className="nameCardFormButton">
              <Button
                type="submit"
                onClick={addCard}
                color="green"
                style={{ backgroundColor: "#396C21" }}
                className="nameCardButton"
                size="tiny"
              >
                Add Card
              </Button>
              {/* <Button type='submit' onClick={addCard}  color='dark green' disabled={disabledButton()}>Add Card</Button> */}
            </Grid.Column>
          </Grid>
        </Form>
        <NameCardList cardList={cards} />
      </Container>
    </div>
  );
};

export default NameCardAdd;
