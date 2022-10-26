import { useState } from "react";
import Alert from "./components/Alert";
import Chip from "./components/Chip";
import Avatar from "./components/Avatar";
import ProgressBar from "./components/ProgressBar";
import Spinner from "./components/Spinner";
import Icon from "./components/Icon";
import AdvancedAlert from "./components/AdvancedAlert";
import ButtonGroup from "./components/ButtonGroup";
import Button from "./components/Button";
import Rating from "./components/Rating";
import Range from "./components/Range";
import {
  Accordion,
  AccordionItem,
  AccordionDescription,
  AccordionTitle,
} from "./components/Accordion";
import Tooltip from "./components/Tooltip";
import { List, ListItem } from "./components/List";
import {
  Card,
  CardHeader,
  CardContent,
  CardImage,
  CardTitle,
  CardActions,
  CardBody,
} from "./components/Card";
import Badge from "./components/Badge";
import Link from "./components/Link";
import Breadcrumbs from "./components/Breadcrumbs";
import { TabList, Tab, TabPanels, TabPanel, Tabs } from "./components/Tabs";
import { Pagination } from "./components/Pagination";
import { ModalFooter, ModalHeader, Modal, ModalBody } from "./components/Modal";
import { TransferList, TransferListItem } from "./components/TransferList";
import { Carousel, CarouselItem, CarouselCaption } from "./components/Carousel";
import {
  Table,
  TableBody,
  TableCol,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "./components/Table";
import { Stepper, Step } from "./components/Stepper";
import Switch from "./components/Switch";
import Checkbox from "./components/Checkbox";

const Home = () => {
  const [alertOpen, isAlertOpen] = useState(true);
  const [advancedAlertOpen, isAdvancedAlertOpen] = useState(true);
  const [rating, setRating] = useState(4);
  const [panel, setPanel] = useState<number | undefined>(undefined);
  const [bottomNav, setBottomNav] = useState(1);
  const [tabs, setTabs] = useState(1);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [tablePage, setTablePage] = useState(1);
  const [rowsTablePerPage, setRowsTablePerPage] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(3);
  const [isSwitched, setSwitched] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [left, setLeft] = useState([
    { label: "List Item 1", value: true },
    { label: "List Item 2", value: false },
    { label: "List Item 3", value: false },
    { label: "List Item 4", value: false },
  ]);

  const [right, setRight] = useState([
    { label: "List Item 5", value: false },
    { label: "List Item 6", value: false },
    { label: "List Item 7", value: false },
    { label: "List Item 8", value: false },
  ]);

  const steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
    "Completed",
  ];

  /*
  const StyledList = styled(List)`  font-size: 10px;  .ko-list-item {     padding: 10px;  }`
*/

  const onClickButton = () => {
    console.log("onClickButton");
  };

  const handleChangeAccordion = (val: any) => {
    setPanel(val);
  };

  const handleChangeTabs = (val: any) => {
    setTabs(val);
  };

  const handleChangeBottomNav = (val: any) => {
    setBottomNav(val);
  };

  const handleChangePage = (val: any) => {
    setPage(val);
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const forTable = [
    {
      name: "Kathryn",
      email: "kathryn@gmail.com",
      price: 436.85,
    },
    {
      name: "Kristin",
      email: "kristin@gmail.com",
      price: 985.79,
    },
    {
      name: "Eugene",
      email: "ecozac@gmail.com",
      price: 212.44,
    },
    {
      name: "Eugene",
      email: "ecozac@gmail.com",
      price: 212.44,
    },
    {
      name: "Eugene",
      email: "ecozac@gmail.com",
      price: 212.44,
    },
    {
      name: "Eugene",
      email: "ecozac@gmail.com",
      price: 212.44,
    },
    {
      name: "Eugene",
      email: "ecozac@gmail.com",
      price: 212.44,
    },
  ];

  const rowsPerPageOptions = [5, 10, 20];

  const handleTablePageChnage = (val: any) => {
    setTablePage(val);
  };

  const handleRowsTablePerPageChnage = (val: any) => {
    setRowsTablePerPage(val);
  };

  const handleChangeCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <>
        <div style={{ width: "50%", marginTop: "20px" }}>
          {alertOpen && (
            <Alert
              color="warning"
              heading="Oh, vivamus vulputate neque"
              onClose={() => isAlertOpen(false)}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Alert>
          )}
        </div>
        <div style={{ width: "50%", marginTop: "20px" }}>
          <Avatar
            imgSrc="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5"
            name="Cozac Eugeniu"
          />
        </div>
        <div style={{ width: "50%", marginTop: "20px" }}>
          <ProgressBar value={20} color="info" showValue={true} />
        </div>
        <div style={{ width: "50%", marginTop: "40px" }}>
          <Range
            initial={10}
            max={100}
            details={true}
            onChange={(value: any) => console.log(value)}
          />
        </div>
        <div style={{ width: "50%", marginTop: "20px" }}>
          <Chip variant="rounded" color="secondary">
            Textdata
          </Chip>
        </div>
        <div style={{ width: "50%", marginTop: "20px" }}>
          <Spinner />
        </div>
        <div style={{ width: "50%", marginTop: "20px" }}>
          {advancedAlertOpen && (
            <AdvancedAlert
              color="success"
              onClose={() => isAdvancedAlertOpen(false)}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </AdvancedAlert>
          )}
        </div>
        <div style={{ width: "50%", marginTop: "20px" }}>
          <Button
            color="secondary"
            variant="outline"
            onClick={onClickButton}
            endIcon={<Icon name="send" />}
          >
            Button
          </Button>
        </div>
        <div style={{ width: "50%", marginTop: "20px" }}>
          <ButtonGroup>
            <Button onClick={onClickButton}>Button</Button>
            <Button variant="outline" onClick={onClickButton}>
              Button
            </Button>
            <Button variant="outline" onClick={onClickButton}>
              Button
            </Button>
          </ButtonGroup>
        </div>
        <div style={{ width: "50%", marginTop: "20px" }}>
          <Rating value={rating} onChangeValue={setRating} variant="disabled" />
        </div>
        <div
          style={{
            width: "35%",
            margin: "20px 0",
            display: "flex",
            justifyContent: "right",
          }}
        >
          <Tooltip title="Tooltip" placement="top">
            <Button onClick={onClickButton}>Button</Button>
          </Tooltip>
        </div>
        <div style={{ width: "35%", margin: "20px 0 20px 30px" }}>
          <Accordion
            allowMultiple={false}
            value={panel}
            onChange={handleChangeAccordion}
          >
            <AccordionItem index={1}>
              <AccordionTitle>Accordion Header 1</AccordionTitle>
              <AccordionDescription>
                You can modify any of this with custom CSS or overriding our
                default variables. It's also worth noting that just about any
                HTML can go within th
              </AccordionDescription>
            </AccordionItem>
            <AccordionItem index={2}>
              <AccordionTitle>Accordion Header 2</AccordionTitle>
              <AccordionDescription>
                <strong>
                  You can modify any of this with custom CSS or overriding our
                  default variables. It's also worth noting that
                </strong>
                just about any HTML can go within th
              </AccordionDescription>
            </AccordionItem>
            <AccordionItem index={3}>
              <AccordionTitle>Accordion Header 3</AccordionTitle>
              <AccordionDescription>
                You can modify any of this with custom CSS or overriding our
                default variables. It's also worth noting that just about any
                HTML can go within th
              </AccordionDescription>
            </AccordionItem>
          </Accordion>
        </div>
        <div style={{ width: "35%", margin: "20px 0 20px 30px" }}>
          <Badge value={10}>
            <Icon name="mail" />
          </Badge>
        </div>
        <div style={{ width: "70%", margin: "20px 0 20px 30px" }}>
          <Stepper activeStep={currentStep} orientation="vertical">
            {steps.map((label, iter) => (
              <Step key={iter} label={label} />
            ))}
          </Stepper>
        </div>
        <div
          style={{
            width: "35%",
            margin: "20px 0 20px 30px",
            position: "relative",
          }}
        >
          <Checkbox checked={isChecked} onChange={handleChangeCheckbox} />
        </div>
        <div style={{ width: "35%", margin: "20px 0 20px 30px" }}>
          <Switch
            value={isSwitched}
            onChange={() => setSwitched(!isSwitched)}
          />
        </div>
        <div style={{ width: "35%", margin: "20px 0 20px 30px" }}>
          <Link href="#">Hello sir</Link>
        </div>
        <div style={{ width: "35%", margin: "20px 0 20px 30px" }}>
          <Tabs activeTab={tabs}>
            <TabList onChange={handleChangeTabs}>
              <Tab label="Item 1" value={1} />
              <Tab label="Item 2" value={2} />
              <Tab label="Item 3" value={3} />
              <Tab label="Item 4" value={4} disabled />
            </TabList>
            <TabPanels>
              <TabPanel index={1}>
                <p>
                  First Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. A ab asperiores blanditiis commodi consequuntur dicta
                  distinctio excepturi fuga nam nostrum omnis quaerat
                  repellendus, tempora veritatis vero? Corporis inventore
                  quaerat voluptate.
                </p>
              </TabPanel>
              <TabPanel index={2}>
                <p>
                  Second Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. A ab asperiores blanditiis commodi consequuntur dicta
                  distinctio excepturi fuga nam nostrum omnis quaerat
                  repellendus, tempora veritatis vero? Corporis inventore
                  quaerat voluptate.
                </p>
              </TabPanel>
              <TabPanel index={3}>
                <p>
                  Third Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. A ab asperiores blanditiis commodi consequuntur dicta
                  distinctio excepturi fuga nam nostrum omnis quaerat
                  repellendus, tempora veritatis vero? Corporis inventore
                  quaerat voluptate.
                </p>
              </TabPanel>
              <TabPanel index={4}>
                <p>
                  Fourth Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. A ab asperiores blanditiis commodi consequuntur dicta
                  distinctio excepturi fuga nam nostrum omnis quaerat
                  repellendus, tempora veritatis vero? Corporis inventore
                  quaerat voluptate.
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <div style={{ width: "35%", margin: "20px 0 20px 30px" }}>
          <Pagination
            total={12}
            current={page}
            closestPages={1}
            onChange={handleChangePage}
          />
        </div>
        <div style={{ width: "35%", margin: "40px 0 40px 30px" }}>
          <Button onClick={handleShowModal}>Open Modal</Button>
          <Modal onClose={handleCloseModal} isOpen={showModal}>
            <ModalHeader closeButton={true}>Header</ModalHeader>
            <ModalBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui
              </p>
            </ModalBody>
            <ModalFooter>
              <Button variant="outline" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button onClick={onClickButton}>Save</Button>
            </ModalFooter>
          </Modal>
        </div>
        <div style={{ width: "35%", margin: "20px 0 20px 30px" }}>
          <Breadcrumbs separator={<Icon name="navigateNext" />}>
            <Link color="dark" href="#">
              Home
            </Link>
            <Link color="dark" href="#">
              Services
            </Link>
          </Breadcrumbs>
        </div>
        <div style={{ width: "35%", margin: "20px 0 20px 30px" }}>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </div>
        <div style={{ width: "35%", margin: "20px 0 20px 30px" }}>
          <List>
            <ListItem>
              <Avatar imgSrc="" name="Cozac Eugeniu" />
              Item 1
            </ListItem>
            <ListItem>
              <Avatar
                imgSrc="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5"
                name="Cozac Eugeniu"
              />
              Item 2
            </ListItem>
            <ListItem>
              <Avatar
                imgSrc="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5"
                name="Cozac Eugeniu"
              />
              Item 3
            </ListItem>
            <ListItem>
              <Avatar
                imgSrc="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5"
                name="Cozac Eugeniu"
              />
              Item 4
            </ListItem>
          </List>
        </div>
        <div style={{ width: "25%", margin: "20px 0 20px 30px" }}>
          <Card>
            <CardHeader
              title="Shrimp and Chorizo Paella"
              subtitle="September 14, 2016"
              avatar={
                <Avatar
                  imgSrc="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5"
                  name="Cozac Eugeniu"
                />
              }
            />
            <CardImage imgSrc="https://mui.com/static/images/cards/contemplative-reptile.jpg" />
            <CardBody>
              <CardTitle>Lizard</CardTitle>
              <CardContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vulputate neque vel quam accumsan dignissim. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </CardContent>
              <CardActions>
                <Button onClick={onClickButton}>Share</Button>
                <Button onClick={onClickButton}>Learn More</Button>
              </CardActions>
            </CardBody>
          </Card>
        </div>
        <div style={{ width: "35%", margin: "40px 0 20px 30px" }}>
          <TransferList
            allChoices={true}
            leftItems={left}
            rightItems={right}
            setLeftItems={setLeft}
            setRightItems={setRight}
          >
            {left.map(({ label, value }) => (
              <TransferListItem
                label={label}
                value={value}
                onChange={setLeft}
              />
            ))}
            {right.map(({ label, value }) => (
              <TransferListItem
                label={label}
                value={value}
                onChange={setRight}
              />
            ))}
          </TransferList>
        </div>
        <div style={{ width: "55%", margin: "60px 0 20px 30px" }}>
          <Carousel indicators={true} activeIndex={index}>
            <CarouselItem>
              <img src="https://placekitten.com/804/400" alt="First slide" />
              <CarouselCaption>
                <h4>Slide label 1</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus vulputate neque.
                </p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
              <img src="https://placekitten.com/801/400" alt="Second slide" />
              <CarouselCaption>
                <h4>Slide label 2</h4>
                <p>
                  Now use Lorem Ipsum as their default model text, and a search
                  for lorem from a line in section.
                </p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
              <img src="https://placekitten.com/802/400" alt="Third slide" />
              <CarouselCaption>
                <h4>Slide label 3</h4>
                <p>
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
              <img src="https://placekitten.com/803/400" alt="Fourth slide" />
              <CarouselCaption>
                <h4>Slide label 4</h4>
                <p>
                  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of Finibus
                  Bonorum et Malorum The.
                </p>
              </CarouselCaption>
            </CarouselItem>
          </Carousel>
        </div>
        <div style={{ width: "55%", margin: "60px 0 20px 30px" }}>
          <Table width="44rem" stripped>
            <TableHead>
              <TableRow>
                <TableCol tag="th">Name</TableCol>
                <TableCol tag="th">Address</TableCol>
                <TableCol tag="th">Payment</TableCol>
              </TableRow>
            </TableHead>
            <TableBody>
              {forTable.map(({ name, email, price }) => {
                return (
                  <TableRow>
                    <TableCol>{name}</TableCol>
                    <TableCol>{email}</TableCol>
                    <TableCol>{price}</TableCol>
                  </TableRow>
                );
              })}
            </TableBody>
            <TableFooter>
              <TablePagination
                page={tablePage}
                count={forTable.length}
                rowsPerPage={rowsTablePerPage}
                rowsPerPageOptions={rowsPerPageOptions}
                onPageChange={handleTablePageChnage}
                onRowsPerPageChange={handleRowsTablePerPageChnage}
              />
            </TableFooter>
          </Table>
        </div>
      </>
    </div>
  );
};

export default Home;
