import { useState, useEffect } from 'react';
import moment from 'moment';
import cn from 'classnames';

import { Carousel, Container, Row, Col, Form, Button } from 'react-bootstrap';
import Image from 'next/image'
import DatePicker from 'react-datepicker';

import styles from '../styles/products.module.css'

import img1 from '../public/static/senser/senser0.png';
import img2 from '../public/static/senser/senser1.png';
import img3 from '../public/static/senser/senser2.png';

import data from '../data';
export default function Products() {
  const [childName, setChildName] = useState('');
  const [birthday, setBirthday] = useState();
  const [months, setMonths] = useState(undefined);

  // index of the selected product from dummy data
  const [current, setCurrent] = useState(0); 

  console.log('data::: ', data);

  const handleSubmit = (e) => {
    e.preventDefault();
    // find how old the baby is in months
    const monthDifference =  moment(moment()).diff(moment(birthday), 'months', true);
    setMonths(monthDifference);
  }

  useEffect(() => {
    console.log('months::: ', months);
    if (!months) {
      return;
    }

    // find which play kit to show

    // find how old the baby is in months
    // const monthDifference =  moment(moment()).diff(moment(birthday), 'months', true);
    // console.log('monthDifference::: ', monthDifference);

  }, [months]);


  return (
    <Container>
      <Row>
        <Col>
          <Carousel 
            className="d-flex"
            interval={400}
          >
            <Carousel.Item>
              <Image 
                className="d-block w-100"
                src={img1}
                alt="First slide"
                // layout="fill"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image 
                className="d-block w-100"
                src={img2}
                alt="First slide"
                // layout="fill"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image 
                className="d-block w-100"
                src={img3}
                alt="First slide"
                // layout="fill"
              />

            </Carousel.Item>
          </Carousel>
        </Col>
        <Col>

        <Row className="d-flex mt-2">
          <h4>
            Product Name
          </h4>
        </Row>
        <Row className="d-flex">
          some product rating and age group
        </Row>

        <hr className="w-100" />

        <Row className="d-flex">
          some product description
        </Row>
        <Row className="d-flex">
          <Form 
            onSubmit={handleSubmit} 
            className={cn(styles.inputContainer)}
          >
            <Form.Group className="mb-3" controlId="childName">
              <Form.Label>Your child's name (optional)</Form.Label>
              <Form.Control type="input" onChange={setChildName}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="birthdate">
              <Form.Label>Birth date</Form.Label>
              <DatePicker
                className="form-control"
                selected={birthday}
                onChange={(date) => setBirthday(date)}
                maxDate={new Date()}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Find Play Kits
            </Button>
          </Form>
        </Row>
        </Col>
      </Row>
    </Container>
  )
};