import { useState } from "react";
import Alert from "./Alert";
import Chip from "./Chip";
import Avatar from "./Avatar";
import ProgressBar from "./ProgressBar";
import Spinner from "./Spinner";
import Icon from "./Icon";
import AdvancedAlert from "./AdvancedAlert";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";
import Rating from "./Rating";
import {
  Accordion,
  AccordionItem,
  AccordionDescription,
  AccordionTitle,
} from "./Accordion";
import Tooltip from "./Tooltip";
import { List, ListItem } from "./List";
import {
  Card,
  CardHeader,
  CardContent,
  CardImage,
  CardTitle,
  CardActions,
  CardBody,
} from "./Card";
import Badge from "./Badge";
import Link from "./Link";
import Breadcrumbs from "./Breadcrumbs";
import { Tabs, TabItem, TabContent, TabPanel, TabContainer } from "./Tabs";
import { Pagination } from "./Pagination";
import Modal from "./Modal";
import { TransferList, TransferListItem } from "./TransferList";
import { Carousel, CarouselItem, CarouselCaption } from "./Carousel";
import {
  Table,
  TableBody,
  TableCol,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "./Table";

const Home = () => {
  const [alertOpen, isAlertOpen] = useState(true);
  const [advancedAlertOpen, isAdvancedAlertOpen] = useState(true);
  const [rating, setRating] = useState(4);
  const [panel, setPanel] = useState<number | null>(null);
  const [bottomNav, setBottomNav] = useState(1);
  const [tabs, setTabs] = useState(1);
  const [page, setPage] = useState(1);
  const [tablePage, setTablePage] = useState(1);
  const [rowsTablePerPage, setRowsTablePerPage] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);

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

  const jenea = undefined;

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
            model="outline"
            onClick={onClickButton}
            endIcon={<Icon name="send" />}
          >
            Button
          </Button>
        </div>
        <div style={{ width: "50%", marginTop: "20px" }}>
          <ButtonGroup>
            <Button onClick={onClickButton}>Button</Button>
            <Button model="outline" onClick={onClickButton}>
              Button
            </Button>
            <Button model="outline" onClick={onClickButton}>
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
            variant="toggle"
            expandedPanel={panel}
            onChange={handleChangeAccordion}
          >
            <AccordionItem>
              <AccordionTitle targetId={1}>Accordion Header 1</AccordionTitle>
              <AccordionDescription panelId={1}>
                You can modify any of this with custom CSS or overriding our
                default variables. It's also worth noting that just about any
                HTML can go within th
              </AccordionDescription>
            </AccordionItem>
            <AccordionItem>
              <AccordionTitle targetId={2}>Accordion Header 2</AccordionTitle>
              <AccordionDescription panelId={2}>
                <strong>
                  You can modify any of this with custom CSS or overriding our
                  default variables. It's also worth noting that
                </strong>
                just about any HTML can go within th
              </AccordionDescription>
            </AccordionItem>
            <AccordionItem>
              <AccordionTitle targetId={3}>Accordion Header 3</AccordionTitle>
              <AccordionDescription panelId={3}>
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
        <div style={{ width: "35%", margin: "20px 0 20px 30px" }}>
          <Link href="#">Hello sir</Link>
        </div>
        <div style={{ width: "35%", margin: "20px 0 20px 30px" }}>
          <TabContainer value={tabs}>
            <Tabs onChange={handleChangeTabs}>
              <TabItem label="Item 1" value={1} />
              <TabItem label="Item 2" value={2} />
              <TabItem label="Item 3" value={3} />
              <TabItem label="Item 4" value={4} disabled />
            </Tabs>
            <TabContent>
              <TabPanel reference={1}>
                <p>
                  First Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. A ab asperiores blanditiis commodi consequuntur dicta
                  distinctio excepturi fuga nam nostrum omnis quaerat
                  repellendus, tempora veritatis vero? Corporis inventore
                  quaerat voluptate.
                </p>
              </TabPanel>
              <TabPanel reference={2}>
                <p>
                  Second Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. A ab asperiores blanditiis commodi consequuntur dicta
                  distinctio excepturi fuga nam nostrum omnis quaerat
                  repellendus, tempora veritatis vero? Corporis inventore
                  quaerat voluptate.
                </p>
              </TabPanel>
              <TabPanel reference={3}>
                <p>
                  Third Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. A ab asperiores blanditiis commodi consequuntur dicta
                  distinctio excepturi fuga nam nostrum omnis quaerat
                  repellendus, tempora veritatis vero? Corporis inventore
                  quaerat voluptate.
                </p>
              </TabPanel>
              <TabPanel reference={4}>
                <p>
                  Fourth Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. A ab asperiores blanditiis commodi consequuntur dicta
                  distinctio excepturi fuga nam nostrum omnis quaerat
                  repellendus, tempora veritatis vero? Corporis inventore
                  quaerat voluptate.
                </p>
              </TabPanel>
            </TabContent>
          </TabContainer>
        </div>
        <div style={{ width: "35%", margin: "20px 0 20px 30px" }}>
          <Pagination
            count={14}
            currentPage={page}
            onChange={handleChangePage}
          />
        </div>
        <div style={{ width: "35%", margin: "40px 0 40px 30px" }}>
          <Button onClick={handleShowModal}>Open Modal</Button>
          <Modal onClose={handleCloseModal} isOpen={showModal}>
            This is Modal Content!
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
