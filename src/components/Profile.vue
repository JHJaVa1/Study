<template>
    <div style="background-color: #ecf0f5;">
        &nbsp;
        <div>
            <h2>학생정보</h2>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <b-card no-body style="margin-bottom: 20px;" img-src="https://placekitten.com/380/200" img-alt="Image"
                        img-top>
                        <template #header>
                            <h4 class="mb-0">고양이</h4>
                            <p><small>Yanghee Go / 猫</small></p>
                        </template>
                        <b-list-group flush>
                            <b-list-group-item>
                                <b style="float: left;">학번</b>
                                <a style="float: right;">20220101</a>
                            </b-list-group-item>
                            <b-list-group-item>
                                <b style="float: left;">생년월일</b>
                                <a style="float: right;">22.09.13(남)</a>
                            </b-list-group-item>
                            <b-list-group-item>
                                <b style="float: left;">입학일자</b>
                                <a style="float: right;">2022.03.02</a>
                            </b-list-group-item>
                            <b-list-group-item>
                                <b style="float: left;">현재학적</b>
                                <a style="float: right;">재학</a>
                            </b-list-group-item>
                            <b-list-group-item>
                                <b style="float: left;">현재학년</b>
                                <a style="float: right;">1 학년</a>
                            </b-list-group-item>
                            <b-list-group-item>&nbsp;</b-list-group-item>
                        </b-list-group>
                    </b-card>
                    <b-card no-body style="margin-bottom: 20px;">
                        <template #header>
                            <h5>상세 정보</h5>
                        </template>
                        <b-list-group flush>
                            <b-list-group-item>
                                <b style="float: left;">소속</b><br/>
                                <a style="float: left;">의학전문대학원</a><br/>
                                <a style="float: left;">의무석사과정</a><br/>
                                <a style="float: left;">의학</a><br/>
                            </b-list-group-item>
                            <b-list-group-item>
                                <b style="float: left;">행정학기</b><br/>
                                <a style="float: left;">
                                    2022학년도 / 1학기
                                </a>
                            </b-list-group-item>
                            <b-list-group-item>
                                <b style="float: left;">연락처</b><br/>
                                <a style="float: left;">휴대전화:010-4173-1348</a><br/>
                                <a style="float: left;">    
                                    집전화 : 02-000-0000
                                </a>
                            </b-list-group-item>
                            <b-list-group-item>
                                <b style="float: left;">이메일</b><br/>
                                <a style="float: left;">
                                    jhj774@metanet.co.kr
                                </a>
                            </b-list-group-item>
                        </b-list-group>
                    </b-card>
                </div>
                <div class="col-md-9">
                    <b-card body-class="text-center" header-tag="nav">
                        <b-tabs content-class="mt-3">
                            <b-tab title="신상" active>
                                <b-row>
                                    <div class="col-md-3">
                                        <div class="form group" align="left" style="margin-bottom: 15px;">
                                            <label style="margin-bottom: 5px;">이름</label>
                                            <input type="text" class="form-control" placeholder="이름"
                                                style="left padding:10px" />
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form group" align="left" style="margin-bottom: 15px;">
                                            <label style="margin-bottom: 5px;">이름(한문)</label>
                                            <input type="text" class="form-control" placeholder="이름(한문)"
                                                style="left padding:10px" />
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form group" align="left" style="margin-bottom: 15px;">
                                            <label style="margin-bottom: 5px;">이름(영문)</label>
                                            <input type="text" class="form-control" placeholder="이름(성)"
                                                style="left padding:10px" />
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form group" align="left" style="margin-bottom: 15px;">
                                            <label style="margin-bottom: 5px;"><br /></label>
                                            <input type="text" class="form-control" placeholder="이름(이름)"
                                                style="left padding:10px" />
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form group" align="left" style="margin-bottom: 15px;">
                                            <label style="margin-bottom: 5px;">주민번호</label>
                                            <input type="text" class="form-control" placeholder="910430"
                                                style="left padding:10px" />
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form group" align="left" style="margin-bottom: 15px;">
                                            <label style="margin-bottom: 5px;"><br /></label>
                                            <input type="password" class="form-control" placeholder="*******"
                                                style="left padding:10px" />
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form group" align="left" style="margin-bottom: 15px;">
                                            <label style="margin-bottom: 5px;">국적</label>
                                            <select class="form-select">
                                                <option value="대한민국">대한민국</option>
                                                <option value="일본">일본</option>
                                                <option value="중국">중국</option>
                                                <option value="미국">미국</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form group" align="left" style="margin-bottom: 15px;">
                                            <label style="margin-bottom: 5px;">전화번호(집)</label>
                                            <input type="text" class="form-control" placeholder="02********"
                                                style="left padding:10px" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form group" align="left" style="margin-bottom: 15px;">
                                            <label style="margin-bottom: 5px;">전화번호(핸드폰)</label>
                                            <input type="text" class="form-control" placeholder="010********"
                                                style="left padding:10px" />
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form group" align="left" style="margin-bottom: 15px;">
                                            <label style="margin-bottom: 5px;">이메일</label>
                                            <input type="text" class="form-control" placeholder="jhj774"
                                                style="left padding:10px" />
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form group" align="left" style="margin-bottom: 15px;">
                                            <label style="margin-bottom: 5px;"><br /></label>
                                            <select class="form-select">
                                                <option value="@metanet.co.kr">@metanet.co.kr</option>
                                                <option value="@naver.com">@naver.com</option>
                                                <option value="@yahoo.com">@yahoo.com</option>
                                                <option value="@etc.com">@etc.com</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form group" align="left" style="margin-bottom: 15px;">
                                            <label style="margin-bottom: 5px;">병역</label>
                                            <select class="form-select">
                                                <option value="해당없음">해당없음</option>
                                                <option value="미필">미필</option>
                                                <option value="군필">군필</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form group" align="left" style="margin-bottom: 15px;">
                                            <label style="margin-bottom: 5px;">군별</label>
                                            <select class="form-select">
                                                <option value="육군">육군</option>
                                                <option value="해군">해군</option>
                                                <option value="공군">공군</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form group" align="left" style="margin-bottom: 15px;">
                                            <label style="margin-bottom: 5px;">입대일</label>
                                            <input type="text" class="form-control" placeholder="20220913"
                                                style="left padding:10px" />
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form group" align="left" style="margin-bottom: 15px;">
                                            <label style="margin-bottom: 5px;">전역일</label>
                                            <input type="text" class="form-control" placeholder="20220913"
                                                style="left padding:10px" />
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form group" align="left" style="margin-bottom: 15px;">
                                            <label style="margin-bottom: 5px;">우편번호</label>
                                            <input type="text" class="form-control" placeholder="12345"
                                                style="left padding:10px" />
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                        <div class="form group" align="left" style="margin-bottom: 15px;">
                                            <label style="margin-bottom: 5px;">주소</label>
                                            <input type="text" class="form-control" placeholder="서울특별시 서대문구 홍제동"
                                                style="left padding:10px" />
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form group" align="left" style="margin-bottom: 15px;">
                                            <label style="margin-bottom: 5px;">상세주소</label>
                                            <input type="text" class="form-control" placeholder="000호"
                                                style="left padding:10px" />
                                        </div>
                                    </div>
                                </b-row>
                            </b-tab>
                            <b-tab title="가족,계좌">
                                <p>가족,계좌</p>
                            </b-tab>
                            <b-tab title="학적">
                                <p>학적</p>
                            </b-tab>
                            <b-tab title="학력,경력">
                                <p>학력,경력</p>
                            </b-tab>
                            <b-tab title="자격,연수">
                                <p>자격,연수</p>
                            </b-tab>
                            <b-tab title="수상">
                                <p>수상</p>
                            </b-tab>
                        </b-tabs>

                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import data from '@/data'
export default {
}
</script>