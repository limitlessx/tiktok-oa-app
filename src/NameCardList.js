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

  const phoneHelper = (phoneNum) => {
    const firstThreeNums = phoneNum.slice(0, 3)
    const midNums = phoneNum.slice(3,6)
    const lastFourNums = phoneNum.slice(6);
    return `${firstThreeNums}-${midNums}-${lastFourNums}`;

  };

  const addressHelper = (addr) => {
    const addressRegx = /^\d+\s*\w+\s*\w+\s*\w+\s*\w+\s*\d+$/g;
    if (addressRegx.test(addr)) {
      const cleanedAddress = addr.split(" ").filter((e) => e.length);
      const addrNum = cleanedAddress[0];
      const address = cleanedAddress[1].toLowerCase();
      const street = cleanedAddress[2].toLowerCase();
      const city = cleanedAddress[3].toLowerCase();
      const state = cleanedAddress[4].toUpperCase();
      const zipcode = cleanedAddress[5];

      return `${addrNum} ${address} ${street}, ${city}, ${state}, ${zipcode}`;
    }

    return addr;
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
                        <p>Phone: {phoneHelper(card.phone)}</p>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <p>Address: {addressHelper(card.address)}</p>
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
