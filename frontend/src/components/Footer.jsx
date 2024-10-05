import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareUpwork } from 'react-icons/fa6';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-dark text-light footer'>
			<Container>
				<Row>
					<Col className='py-3'>
						<p>PCBay &copy; {currentYear}</p>
					</Col>
					<Col className='py-3'>
						<small>DISCLAIMER: This is not an official website, do not use your personal information.</small>
					</Col>
					<Col className='py-3'>
						<ul className='socials'>
							<li>
								<a href='https://chriswebdev.me'>Portfolio</a>
							</li>
							<li>
								<a href='mailto:clopenz@outlook.com'>
									<FaEnvelope />
								</a>
							</li>
							<li>
								<a href='https://www.linkedin.com/in/cristian-lopez-643245179/'>
									<FaLinkedin />
								</a>
							</li>
							<li>
								<a href='https://github.com/clopenz'>
									<FaGithub />
								</a>
							</li>
							<li>
								<a href='https://www.upwork.com/freelancers/~011ced9ea6ed5c4e8d'>
									<FaSquareUpwork />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
