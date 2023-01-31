import React,{useState} from "react";
import{Button,Grid,Segment} from "semantic-ui-react";

const styleLink=document.createElement("link");
styleLink.rel="stylesheet";
styleLink.href="https://cdn.jsdelivr.net/npm/semantic.min.css";
const Card=(Props) => {
    const[isNegative,setIsNegative] = useState(true);
    return (
        <Segment raised>
            <Grid centered>
                <Grid.Row centered>
                    <Grid.Column textAlign="center" as={"h1"}>
                        Count
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column textAlign="center" as={"h2"}>
                        {Props.counts}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered columns={2}>
                    <Grid.Column textAlign="center">
                        <Button
                        size="large"
                        color="green"
                        onClick={()=> {
                            let count = Props.counts;
                            Props.setCounts(++count);
                            count >0 ? setIsNegative(false): setIsNegative(true);
                        }}
                        >
                            Increment
                        </Button>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <Button
                        size="large"
                        color="red"
                        disabled={isNegative}
                        onClick={()=> {
                            let count = Props.counts;
                            Props.setCounts(--count);
                            count <=0 ? setIsNegative(true): setIsNegative(false);
                        }}
                        >
                            Decrement
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
};

export default Card;