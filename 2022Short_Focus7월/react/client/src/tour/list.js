import React, { Component } from "react";
import axios from 'axios';

export default class List extends Component{

    constructor(props){
        super(props);
        this.state = {
            url : "https://apis.data.go.kr/6290000/tourdestbaseinfo/gettourdestbaseinfo?serviceKey=%2BvOx%2BGn2V73no86FbzFG8Dm1of%2FywcS3xfIIZM1YgDe6cKDNqjJadBv1%2B4i9yVC2rS5lmk7swg5Z2tNJkqsSRw%3D%3D&type=json&tourDestNm=%EA%B3%B5%EC%9B%90&pageNo=1&numOfRows=10",
            tourData : "", //info data
            tourList : "", //info list
            config : ""    //env option
        };
    }

    componentDidMount() {

        this.callListApi();

    }

    //관광정보 API 연동
    callListApi = async () =>{
        //위 API 주소와 연결 시
        axios.get(this.state.url).then(res=>{
            //Success
            this.setState({config : res.data.header});
            this.setState({tourData : res.data.TourDestBaseInfo});
            this.setState({tourList : this.viewList(res.data.TourDestBaseInfo)})
        }).catch(error => {
            //Fail
            console.log("error!!");
        });
    };

    //Tour Info Table List
    viewList = (data) => {
        let result = [];
        let json = JSON.parse(JSON.stringify(data)); //Json을 문자열로 변환

        let i = 1;
        for(let x of json){
            result.push(
                <tr>
                    <td>{i++}</td>
                    <td>{x.tourDestNm}</td>
                    <td>{x.addrRoad}</td>
                    <td>{x.publicConvFcltInfo}</td>
                    <td>{x.capacity}</td>
                    <td>{x.availParkingCnt}</td>
                    <td>{x.tourDestIntro}</td>
                    <td>{x.mngAgcTel}</td>
                    <td>{x.mngAgcNm}</td>
                </tr>
            )
        }

        return result;
    }    

    render(){
        return(
            <div id="tableSector">
                <table>
                    <tr>
                        <th>연번</th>
                        <th>관광지명</th>
                        <th>도로명주소</th>
                        <th>편의시설</th>
                        <th>수용인원</th>
                        <th>주차</th>
                        <th>소개</th>
                        <th>전화</th>
                        <th>관리기관</th>
                    </tr>
                    {this.state.tourList}
                </table>
            </div>
        );
    }

}