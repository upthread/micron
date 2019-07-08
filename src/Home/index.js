import React from 'react'
import theme from '../App/theme'

// import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const Home = () => {

    const classes = theme()

    return (

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper>
                        <h1>Home</h1>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <Card>
                            <CardContent>
                                <h3>Card</h3>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <Card>
                            <CardContent>
                                <h3>Card</h3>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <Card>
                            <CardContent>
                                <h3>Card</h3>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
            </Grid>

    )
}

export default Home
