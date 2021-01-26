import React from "react";
import { List, Card, Grid } from "semantic-ui-react";
import "./NameCardList.css";

const NameCardList = ({ cardList }) => {
  const titleCaseHelper = (str) => {
    const newStr = str.toLowerCase();
    const firstLetter = newStr.slice(0, 1).toUpperCase();
    const restLetters = newStr.slice(1);
    return firstLetter.concat(restLetters);
  };
  const formatPhoneNumber = (str) => {
    const firstLetter = str.slice(0, 1).toUpperCase();
    const restLetters = str.slice(1);
    return firstLetter.concat(restLetters);
  };

  return (
    <>
      {cardList.length > 0
        ? cardList.map((card, idx) => (
            <List key={idx}>
              <List.Item>
                <Card fluid className="cardListCard">
                  <Grid>
                    <Grid.Row className="cardListCardText">
                      <Grid.Column width={4}>
                        <p>
                          {titleCaseHelper(card.firstName)}{" "}
                          {titleCaseHelper(card.lastName)}
                        </p>
                      </Grid.Column>
                      <Grid.Column width={4}>
                        <p>Phone: {card.phone}</p>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <p>Address: {card.address}</p>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Card>
              </List.Item>
            </List>
          ))
        : null}
    </>
  );
};

export default NameCardList;
