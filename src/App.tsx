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
import Image from "./Image";
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
import { BottomNavigation, BottomNavigationItem } from "./BottomNavigation";
import { Pagination } from "./Pagination";

function App() {
  const [alertOpen, isAlertOpen] = useState(true);
  const [advancedAlertOpen, isAdvancedAlertOpen] = useState(true);
  const [data, setData] = useState<any>([]);
  const [rating, setRating] = useState(4);
  const [panel, setPanel] = useState<number | null>(null);
  const [panels, setPanels] = useState<any>([5, 6, null]);
  const [bottomNav, setBottomNav] = useState(1);
  const [tabs, setTabs] = useState(1);
  const [page, setPage] = useState(1);

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

  return (
    <div className="App">
      <div className="App-header">
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
                First Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                A ab asperiores blanditiis commodi consequuntur dicta distinctio
                excepturi fuga nam nostrum omnis quaerat repellendus, tempora
                veritatis vero? Corporis inventore quaerat voluptate.
              </TabPanel>
              <TabPanel reference={2}>
                Second Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                A ab asperiores blanditiis commodi consequuntur dicta distinctio
                excepturi fuga nam nostrum omnis quaerat repellendus, tempora
                veritatis vero? Corporis inventore quaerat voluptate.
              </TabPanel>
              <TabPanel reference={3}>
                Third Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                A ab asperiores blanditiis commodi consequuntur dicta distinctio
                excepturi fuga nam nostrum omnis quaerat repellendus, tempora
                veritatis vero? Corporis inventore quaerat voluptate.
              </TabPanel>
              <TabPanel reference={4}>
                Fourth Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                A ab asperiores blanditiis commodi consequuntur dicta distinctio
                excepturi fuga nam nostrum omnis quaerat repellendus, tempora
                veritatis vero? Corporis inventore quaerat voluptate.
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
        <div style={{ width: "35%", margin: "20px 0 20px 30px" }}>
          <BottomNavigation value={bottomNav} onChange={handleChangeBottomNav}>
            <BottomNavigationItem icon="search" />
            <BottomNavigationItem icon="person" />
            <BottomNavigationItem icon="locationPin" />
          </BottomNavigation>
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
        <div style={{ width: "35%", margin: "20px 0 20px 30px" }}>
          <Image imgSrc="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg" />
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
              action={
                <Button model="icon" onClick={onClickButton}>
                  <Icon name="keyboardControl" />
                </Button>
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
      </div>
    </div>
  );
}

export default App;
