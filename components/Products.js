import { useState, useEffect } from 'react';
import moment from 'moment';
import cn from 'classnames';

import { Carousel, Container, Row, Col, Form, Button } from 'react-bootstrap';
import Image from 'next/image'
import DatePicker from 'react-datepicker';

import styles from '../styles/products.module.css'

import data from '../data';

export default function Products() {
  const [childName, setChildName] = useState('');
  const [birthday, setBirthday] = useState();
  const [months, setMonths] = useState(undefined);

  // index of the selected product from dummy data
  const [current, setCurrent] = useState(0); 

  const product = data.kits[current];

  const handleSubmit = (e) => {
    e.preventDefault();
    // find how old the baby is in months
    const monthDifference =  moment(moment()).diff(moment(birthday), 'months', true);
    console.log('monthDifference::: ', monthDifference);
    setMonths(monthDifference);
  }

  useEffect(() => {
    if (!months) {
      return;
    }

    // find which play kit to show
    if (months > 0 && months < 3 ) {
      setCurrent(1);
    } else if (months >= 3 && months < 5) {
      setCurrent(2);
    } else if (months >= 5 && months < 7) {
      setCurrent(3);
    } else if (months >= 7 && months < 9) {
      setCurrent(4);
    } else if (months >= 9 && months < 11) {
      setCurrent(5);
    } else if (months >= 11 && months < 13) {
      setCurrent(6);
    } else {
      // handle case where we dont have a product for over 12 months
      setCurrent(0);
    }

  }, [months]);


  return (
    <Container>
      <Row>
        <Col>
          <Carousel 
            className="d-flex"
            interval={2000}
          >
            {
              product.images.map((image, i) => (
                <Carousel.Item key={i}>
                  <Image 
                    className="d-block w-100"
                    src={image}
                    alt={`${product.name} image-${i}`}
                  />
                </Carousel.Item>
              ))
            }
          </Carousel>
        </Col>

        <Col>
          <Row className="d-flex mt-2">
            <h4 className="p-0">
              {product.name}
            </h4>
          </Row>
          {
            current !== 0 ? (
              <div className="d-flex flex-row justify-content-between">
                <div className="border-right">
                  <i className="bi-star-fill gold"></i>
                  <i className="bi-star-fill gold"></i>
                  <i className="bi-star-fill gold"></i>
                  <i className="bi-star-fill gold"></i>
                  <i className="bi-star-fill gold"></i>
                  20 Review
                </div>
                <div className="border-right">
                  {product.age}
                </div>
                <div>
                  Part of: Play Kit Subscription
                </div>
              </div>
            ) : null
          }

          <hr className="w-100" />

          <Row className="d-flex mb-2">
            {product.description}
          </Row>

          <Row className="d-flex mb-2">
            <ul>
              {product.benefits.map((benefit, i) => (
                <li key={i}>
                  {benefit}
                </li>
              ))}
            </ul>
          </Row>

          <Row className="d-flex mb-2">
            <h5>
              Ships Every 2 Months | $80 per Play Kit
            </h5>
          </Row>

          <Row className="d-flex justify-content-between">
            <Form 
              onSubmit={handleSubmit} 
              className={cn(styles.inputContainer, 'd-flex')}
            >
              <Form.Group className={styles.input} controlId="childName">
                <Form.Label>Your child's name (optional)</Form.Label>
                <Form.Control type="input" onChange={setChildName}/>
              </Form.Group>

              <Form.Group className={styles.input} controlId="birthdate">
                <Form.Label>Birth date</Form.Label>
                <DatePicker
                  className="form-control"
                  selected={birthday}
                  onChange={(date) => setBirthday(date)}
                  maxDate={new Date()}
                />
              </Form.Group>
              <Button className="loveveryGreen" type="submit">
                Subscribe now
              </Button>
            </Form>
          </Row>
          <Row className="d-flex flex-row mt-2">
            <ul className={styles.guarantees}>
              <li>Free shipping</li>
              <li>Cancel anytime</li>
              <li>Satisfaction guaranteed</li>
            </ul>
          </Row>
        </Col>
      </Row>
    </Container>
  )
};