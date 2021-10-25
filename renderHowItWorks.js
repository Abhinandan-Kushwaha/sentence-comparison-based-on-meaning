const renderHowItWorks = () => {
    console.log('called')
    document.getElementById('how').innerHTML =
    `
    <h3>2. Comparing for similarity</h3>
            <p>
                After preprocessing both the sentences using above approach, we get 2 set of tokens, one for each sentence. We perform following operations on each set of tokens-<br/>
                For example, if the sentences were -
                <p style="margin:20px;color: #454545;">
                    <b><i>They made this project.</i></b>&nbsp; &nbsp; and &nbsp; &nbsp; <b><i>This project is made by them.</i></b> <br/>
                </p>
                Then the tokens will be -
                <p style="margin:20px;color: #7a3c3c;">
                    <b><i>they, made, this, project</i></b>&nbsp; &nbsp; and &nbsp; &nbsp; <b><i>this, project, made, them</i></b> <br/>
                </p>
                <ol>
                    <li>
                        Find the bigger token set and assign it to s1. Assign the smaller one to s2.<br>

                    </li>
                    <br/>
                    <li>
                        let maxLength = length of s1<br/>
                        let minLength = lenngth of s2
                    </li>
                    <br/>
                    <li>
                        Make a matrix named similarities with <i>maxLength</i> rows and <i>minLength</i> columns
                        <br/>
                        similarities = [maxLength][minLength]
                    </li>
                    <br/>
                    <li>
                        for each token t1 in s1, do{<br/>
                            &nbsp;&nbsp;for each token t2 in s2, do{<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;similarities[row][colunm] = similarityUsing<b>LevenshteinDistance</b>(t1,t2)<br/>
                                &nbsp;&nbsp;}<br/>
                        }
                    </li>
                    <br/>
                    <li>
                        This generates a table of similarities between the tokens taken from the 2 sentences
                    </li>
                    <br/>
                    <li>
                        Now find the highest sum of similarities from the table, such that no two similarity values come from the same row or same column
                    </li>
                    <table>
                        <tr>
                            <td style="background-color: lightgray;"></td>
                            <td class="boldCell">this</td>
                            <td class="boldCell">project</td>
                            <td class="boldCell">made</td>
                            <td class="boldCell">them</td>
                        </tr>
                        <tr>
                            <td class="boldCell">they</td>
                            <td>0.5</td>
                            <td>0.14</td>
                            <td>0</td>
                            <td class="sCell">0.75</td>
                        </tr>
                        <tr><td class="boldCell">made</td>
                            <td>0</td>
                            <td>0.14</td>
                            <td class="sCell">1</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td class="boldCell">this</td>
                            <td class="sCell">1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0.5</td>
                        </tr>
                        <tr><td class="boldCell">project</td>
                            <td>0</td>
                            <td class="sCell">1</td>
                            <td>0.14</td>
                            <td>0.14</td>
                        </tr>
                    </table>
                    <br/>
                    sum = 3.75
                    <br/>
                    <br/>
                    <li>
                        Divide this sum by maxLength to get the average similarity<br/>
                        average = 3.75/4 = 0.9375<br/>
                        <b>Similarity = 93.75%</b>
                    </li>
                </ol>
                <b>Reference- </b>
                <a target="_blank" href='https://en.wikipedia.org/wiki/Levenshtein_distance'>Levenshtein distance</a>
            </p>
    `
}