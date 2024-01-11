import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import demo from './Images/j.png';
import demo1 from './Images/i.png';



function NavComp() {
    const [showModal, setShowModal] = useState(false);
    const [selectedDropdownOption, setSelectedDropdownOption] = useState(null);
    const [branchAddress, setBranchAddress] = useState('');
    const [branchContact, setBranchContact] = useState('');
    const [branchMap, setBranchMap] = useState('');

    const handleModalShow = (selectedOption) => {
        setShowModal(true);
        setSelectedDropdownOption(selectedOption);

        switch (selectedOption) {
            case 'Kerala-Kochi':
                setBranchAddress('LEVEL 3, AMRA 6A, Automobile Rd, Mamangalam, Palarivattom, Kochi, Kerala - 682025');
                setBranchContact('+919109515772');
                setBranchMap(<a   href="https://maps.app.goo.gl/DC36BFnM4psCARcLA" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);
                break;
            case 'Kerala-Kollam':
                setBranchAddress('Mata Amritanandamayi Math Main Rd, Amritapuri, Parayakadavu, Vallikavu, Kerala 690546');
                setBranchContact('+919962250988');
                setBranchMap(<a href="https://maps.app.goo.gl/DC36BFnM4psCARcLA" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'Kerala-Trivandrum':
                setBranchAddress('University of Kerala Senate House Campus, Palayam, Thiruvananthapuram, Kerala 6');
                setBranchContact('+916258746251');
                setBranchMap(<a href="https://maps.app.goo.gl/DC36BFnM4psCARcLA" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'Chennai-Chrompet':
                setBranchAddress('15, 6th Main Road,south street, Chambers Colony, Chrompet Chennai – 600044.');
                setBranchContact('+914578965214');
                setBranchMap(<a href="https://maps.app.goo.gl/FSoW91WDW1ME57uN9" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'Chennai-Velachery':
                setBranchAddress('No.12A Tharamani 100 Feet Road, Next to Canara bank, Tansi Nagar, Velachery, Chennai - 600042');
                setBranchContact('+912457896325');
                setBranchMap(<a href="https://maps.app.goo.gl/FSoW91WDW1ME57uN9" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'Chennai-Vadapalani':
                setBranchAddress('No 189, N.S.K Salai, opposite to Kamala theatre and above Vijaya Bank, Vadapalani, Chennai - 26');
                setBranchContact('+915689742563');
                setBranchMap(<a href="https://maps.app.goo.gl/FSoW91WDW1ME57uN9" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'New Delhi-Dhillika':
                setBranchAddress('Rashtrapati Bhawan,2nd cross street, Presidents Estate, New Delhi, Delhi 110004');
                setBranchContact('+912547896325');
                setBranchMap(<a href="https://maps.app.goo.gl/zPTAT4v19GYfaqtH6" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'New Delhi-Lal Kot':
                setBranchAddress('Community Centre, Plot No. 1, Pocket A, Okhla Phase I, Okhla Industrial Estate, New Delhi, Delhi 110020');
                setBranchContact('+917894563258');
                setBranchMap(<a href="https://maps.app.goo.gl/zPTAT4v19GYfaqtH6" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'New Delhi-Kilokri':
                setBranchAddress('Gurgaon - Delhi Expy, NH-8, APS Colony, Delhi Cantonment, New Delhi, Delhi 110010');
                setBranchContact('+914598345789');
                setBranchMap(<a href="https://maps.app.goo.gl/zPTAT4v19GYfaqtH6" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'Karnataka-Whitefeild':
                setBranchAddress('12, Sri Lakshmi Narasimha PG for Gents, Byrappa Layout, Sathya Sai Layout, Whitefield, Bengaluru, Karnataka 560066');
                setBranchContact('+917893214568');
                setBranchMap(<a href="https://maps.app.goo.gl/veJZFEm9VsMYWd7w9" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'Karnataka-Electronic City':
                setBranchAddress('Santegate, Hoskote Malur Rd, next to Sri Satya Convention Hall, Hoskote, Bengaluru, Karnataka 562114');
                setBranchContact('+917854123568');
                setBranchMap(<a href="https://maps.app.goo.gl/veJZFEm9VsMYWd7w9" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'Karnataka-Hebbal':
                setBranchAddress('4Q8H+3WG, Unnamed Road, Venkatapura, Karnataka 562114');
                setBranchContact('+914578935785');
                setBranchMap(<a href="https://maps.app.goo.gl/veJZFEm9VsMYWd7w9" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;

            case 'Pune-Lonavala':
                setBranchAddress('Bajrang Baug Gardens On, Old Mumbai - Pune Hwy, Tungarli, Lonavala, Maharashtra 410401');
                setBranchContact('+91887526435');
                setBranchMap(<a href="https://maps.app.goo.gl/GJiRikzq1MxisyCT6" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'Pune-Harihar':
                setBranchAddress('WF79+M69, Harshewadi, Maharashtra 422212');
                setBranchContact('+915478962565');
                setBranchMap(<a href="https://maps.app.goo.gl/GJiRikzq1MxisyCT6" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'Pune-Bhosari':
                setBranchAddress('Plot No. 77, Sector Number 7 Rd, PCNTDA, MIDC, Bhosari, Pimpri-Chinchwad, Maharashtra 411026');
                setBranchContact('+912314567852');
                setBranchMap(<a href="https://maps.app.goo.gl/GJiRikzq1MxisyCT6" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'Telangana-KPHB':
                setBranchAddress('BLOCK-12, Malaysian Twp, KPHB 5th Phase, Kukatpally, Hyderabad, Telangana 500072');
                setBranchContact('+918852146354');
                setBranchMap(<a href="https://maps.app.goo.gl/cWyoZgpjvi2RxMJQ7" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'Telangana-Punjagutta':
                setBranchAddress('No:6 , 3-883, F/1A, Punjagutta Officers Colony, Somajiguda, Hyderabad, Telangana 500082');
                setBranchContact('+915542367895');
                setBranchMap(<a href="https://maps.app.goo.gl/cWyoZgpjvi2RxMJQ7" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'Telangana-Dilsukhnagar':
                setBranchAddress('5a, Chaitanyapuri Main Rd, Millenium Residency, Krishna Nagar, Dilsukhnagar, Hyderabad, Telangana 500060');
                setBranchContact('+918654235718');
                setBranchMap(<a href="https://maps.app.goo.gl/cWyoZgpjvi2RxMJQ7" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;

            case 'West Bengal-Kolkata':
                setBranchAddress('14, Syed Amir Ali Ave, Lower Range, Beck Bagan, Ballygunge, Kolkata, West Bengal 700017');
                setBranchContact('+918795624158');
                setBranchMap(<a href="https://maps.app.goo.gl/twUu7KmHaHwAmoJ18" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'West Bengal-Siluguri':
                setBranchAddress('Ward No, 6, Burdwan Rd, Ward 6, Ward 4, Mahananda Para, Siliguri, West Bengal 734001');
                setBranchContact('+915478962541');
                setBranchMap(<a href="https://maps.app.goo.gl/twUu7KmHaHwAmoJ18" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'West Bengal-Malda':
                setBranchAddress('24/A, Rabindra Ave, near Bihani Petrol Pump, 1 No Govt Colony, Malda, West Bengal 732101');
                setBranchContact('+917896541235');
                setBranchMap(<a href="https://maps.app.goo.gl/twUu7KmHaHwAmoJ18" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'Assam-Guwahati':
                setBranchAddress('Kahilipara Main Rd, Odalbakra, Kahilipara, Guwahati, Assam 781034');
                setBranchContact('+91725469852');
                setBranchMap(<a href="https://maps.app.goo.gl/Guy8mph85aaszfYbA" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'Assam-Tezpur':
                setBranchAddress('PR32+XXV, Napaam, Tezpur, Salmara Gaon, Assam 784028');
                setBranchContact('+919585456254');
                setBranchMap(<a href="https://maps.app.goo.gl/Guy8mph85aaszfYbA" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'Assam-Diburghar':
                setBranchAddress('Junaki path, near Pacca line field, Dibrugarh, Assam 786003');
                setBranchContact('+91985472516');
                setBranchMap(<a href="https://maps.app.goo.gl/Guy8mph85aaszfYbA" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'ArunachalPradesh-Meghalaya':
                setBranchAddress('JM3M+5J2, Pyndengdombah Incl. Khah, Meghalaya 793120');
                setBranchContact('+918878965425');
                setBranchMap(<a href="https://maps.app.goo.gl/nUke71ykQ5ckDGMK7" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'ArunachalPradesh-Shillong':
                setBranchAddress('Pine Villa, Golf Club, LumShyiap, Lumshyiap, Shillong, 793001');
                setBranchContact('+91782436515');
                setBranchMap(<a href="https://maps.app.goo.gl/opQ57EgUsnod8uPy7" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'ArunachalPradesh-Tawang':
                setBranchAddress('Lama Tsekhang  sho, Tawang, Arunachal Pradesh 790104');
                setBranchContact('+914587526587');
                setBranchMap(<a href="https://maps.app.goo.gl/qkQXUCHQZiFBLpLi8" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'Goa-Panaji':
                setBranchAddress('FRRG+C6X, Unnamed Road, Altinho, Panaji, Goa 403001');
                setBranchContact('+915587426985');
                setBranchMap(<a href="https://maps.app.goo.gl/9Pimdp3obnYBi3Ty8" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'Goa-Calangute':
                setBranchAddress('Umtav Vado, Khobra Waddo, Calangute, Goa 403519');
                setBranchContact('+916584275819');
                setBranchMap(<a href="https://maps.app.goo.gl/cGWUTRqveTDuHwym8" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;
            case 'Goa-Baga':
                setBranchAddress('near sun village resort, behind marathi primary school, Sankwadi, Arpora, Baga, Goa 403516');
                setBranchContact('+918754265874');
                setBranchMap(<a href="https://maps.app.goo.gl/ehRhy6AoGsuzBMmz8" target="_blank" rel="noopener noreferrer" >
                    <img src='https://cdn-icons-png.flaticon.com/512/235/235861.png' style={{ height: '70px', width: '70px' }} />
                </a>);

                break;

            default:
                setBranchAddress('');
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <div >
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container  >

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>

                
                        <NavDropdown  title={<span style={{ fontWeight: 'bold' }}>
                        Kerala</span>} id="Kerala" className="me-auto">
                                <NavDropdown.Item  onClick={() => handleModalShow('Kerala-Kochi')}>
                                    Kochi
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleModalShow('Kerala-Kollam')}>
                                    Kollam
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleModalShow('Kerala-Trivandrum')}>
                                    Trivandrum
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Item className="me-auto">
                                <Nav.Link>&nbsp;</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="me-auto">
                                <Nav.Link>&nbsp;</Nav.Link>
                            </Nav.Item>

                            <NavDropdown title={<span style={{ fontWeight: 'bold' }}>
                            Tamil Nadu</span>} id="Tamil Nadu" className="me-auto">

                                <NavDropdown.Item onClick={() => handleModalShow('Chennai-Chrompet')}>
                                    Chrompet
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleModalShow('Chennai-Velachery')}>
                                    Velachery
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleModalShow('Chennai-Vadapalani')}>
                                    Vadapalani
                                </NavDropdown.Item>
                            </NavDropdown>


                            <Nav.Item className="me-auto">
                                <Nav.Link>&nbsp;</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="me-auto">
                                <Nav.Link>&nbsp;</Nav.Link>
                            </Nav.Item>

                            <NavDropdown title={<span style={{ fontWeight: 'bold' }}>
                            New Delhi</span>} id="New Delhi" className="me-auto">
                                <NavDropdown.Item onClick={() => handleModalShow('New Delhi-Dhillika')}>
                                    Dhillika
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleModalShow('New Delhi-Lal Kot')}>
                                    Lal Kot
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleModalShow('New Delhi-Kilokri')}>
                                    Kilokri
                                </NavDropdown.Item>
                            </NavDropdown>



                            <Nav.Item className="me-auto">
                                <Nav.Link>&nbsp;</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="me-auto">
                                <Nav.Link>&nbsp;</Nav.Link>
                            </Nav.Item>

                            <NavDropdown title={<span style={{ fontWeight: 'bold' }}>
                            Karnataka</span>} id="Karnataka" className="me-auto">
                                <NavDropdown.Item onClick={() => handleModalShow('Karnataka-Whitefeild')}>
                                Whitefeild
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleModalShow('Karnataka-Electronic City')}>
                                Electronic City
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleModalShow('Karnataka-Hebbal')}>
                                Hebbal
                                </NavDropdown.Item>
                            </NavDropdown>

                            

                            <Nav.Item className="me-auto">
                                <Nav.Link>&nbsp;</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="me-auto">
                                <Nav.Link>&nbsp;</Nav.Link>
                            </Nav.Item>

                            <NavDropdown title={<span style={{ fontWeight: 'bold' }}>
                            Pune</span>} id="Pune" className="me-auto">
                                <NavDropdown.Item onClick={() => handleModalShow('Pune-Lonavala')}>
                                Lonavala
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleModalShow('Pune-Harihar')}>
                                Harihar
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleModalShow('Pune-Bhosari')}>
                                    Kilokri
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Item className="me-auto">
                                <Nav.Link>&nbsp;</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="me-auto">
                                <Nav.Link>&nbsp;</Nav.Link>
                            </Nav.Item>

                            <NavDropdown title={<span style={{ fontWeight: 'bold' }}>
                            Telangana</span>} id="Telangana" className="me-auto">
                                <NavDropdown.Item onClick={() => handleModalShow('Telangana-KPHB')}>
                                KPHB
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleModalShow('Telangana-Punjagutta')}>
                                Punjagutta
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleModalShow('Telangana-Dilsukhnagar')}>
                                Dilsukhnagar
                                </NavDropdown.Item>
                            </NavDropdown>


                            <Nav.Item className="me-auto">
                                <Nav.Link>&nbsp;</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="me-auto">
                                <Nav.Link>&nbsp;</Nav.Link>
                            </Nav.Item>
                            <NavDropdown title={<span style={{ fontWeight: 'bold' }}>
                            West Bengal</span>} id="West Bengal" className="me-auto">
                           
                                <NavDropdown.Item onClick={() => handleModalShow('West Bengal-Kolkata')}>
                                Kolkata
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleModalShow('West Bengal-Siluguri')}>
                                Siluguri
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleModalShow('West Bengal-Malda')}>
                                Malda
                                </NavDropdown.Item>
                            </NavDropdown>
                        

                            <Nav.Item className="me-auto">
                                <Nav.Link>&nbsp;</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="me-auto">
                                <Nav.Link>&nbsp;</Nav.Link>
                            </Nav.Item>

                            <NavDropdown title={<span style={{ fontWeight: 'bold' }}>
                            Assam</span>} id="Assam" className="me-auto">
                                <NavDropdown.Item onClick={() => handleModalShow('Assam-Guwahati')}>
                                Guwahati
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleModalShow('Assam-Tezpur')}>
                                Tezpur
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleModalShow('Assam-Diburghar')}>
                                Diburghar
                                </NavDropdown.Item>
                            </NavDropdown>


                            <Nav.Item className="me-auto">
                                <Nav.Link>&nbsp;</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="me-auto">
                                <Nav.Link>&nbsp;</Nav.Link>
                            </Nav.Item>


                            <NavDropdown title={<span style={{ fontWeight: 'bold' }}>
                                ArunachalPradesh</span>} id="ArunachalPradesh" className="me-auto">

                                <NavDropdown.Item onClick={() => handleModalShow('ArunachalPradesh-Meghalaya')}>
                                Meghalaya
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleModalShow('ArunachalPradesh-Shillong')}>
                                Shillong
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleModalShow('ArunachalPradesh-Tawang')}>
                                Tawang
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Item className="me-auto">
                                <Nav.Link>&nbsp;</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="me-auto">
                                <Nav.Link>&nbsp;</Nav.Link>
                            </Nav.Item>

                            <NavDropdown title={<span style={{ fontWeight: 'bold' }}>
                            Goa</span>} id="Goa" className="me-auto">
                                <NavDropdown.Item onClick={() => handleModalShow('Goa-Panaji')}>
                                Panaji
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleModalShow('Goa-Calangute')}>
                                Calangute
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleModalShow('Goa-Baga')}>
                                Baga
                                </NavDropdown.Item>
                            </NavDropdown>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton className="Drop1">
                    <Modal.Title>{` ${selectedDropdownOption}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="Drop">
                    <Form>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Branch Address</Form.Label>
                            <h5>{branchAddress}</h5>
                        </Form.Group>
                    </Form>
                    <hr></hr>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{branchContact}</h5>
                        </div>
                        <div>
                            <h5>{branchMap}</h5>
                        </div>

                        {/* <div>
                            <Button variant="outline-primary" className="me-2">
                                Add
                            </Button>
                            <Button variant="outline-danger">
                                Delete
                            </Button>
                        </div> */}
                    </div>
                </Modal.Body>

            </Modal>
            

        

            <Container >
            <Carousel style={{ width: '118%', left:'-10%', margin: 'auto' }}>
                    <Carousel style={{ width: '100%', margin: 'auto' }}>
                        
                        <Carousel.Item interval={1000}>
                            <div style={{ position: 'relative', height: '600px' }}>
                                <img className="d-block w-100" src={demo1} alt="Institute" style={{ height: '100%', objectFit: 'cover' }} />
                                <div className="carousel-caption custom-caption">
                      
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <div style={{ position: 'relative', height: '600px' }}>
                                <img className="d-block w-100" src={demo} alt="Institute" style={{ height: '100%', objectFit: 'cover' }} />
                                <div className="carousel-caption custom-caption">
                               <i><b><h3>"Net Tech is the world’s ace software training organization with an aim to bridge the gap between the demands of the industry and the curriculum of educational institutions.
                               Net Tech institute is 
a platform where young minds are given the opportunity to build successful careers".
</h3></b>  </i> 
                                <p className='j'>NetTech</p>
                                <p className='p'>Contact:+917894561235</p>
                                <p className='r'>nettech@gmail.com</p>
                                </div>
                            </div>
                        </Carousel.Item>
                    
                    </Carousel>
                </Carousel>
                

</Container>
{/* <Container className='cont' style={{ width: '1500px', marginLeft: '0px' }}>
    <img src='https://getwallpapers.com/wallpaper/full/d/0/5/538124.jpg' 
    style={{ height: '550px', width: '1500px' }} />


</Container> */}



        </div>
    );
}

export default NavComp;