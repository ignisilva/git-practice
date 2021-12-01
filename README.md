## Branch 생성

- branch 생성시, 어떤 작업에 대한 branch인지 확실히 명시할 것

## Git branch 전략

- git flow

  - hotfix: 급하게 고치는 긴급 패치 용도
  - main: 온전히 배포용 (사용자가 쓰게될 소스코드)
  - release: (Browser test / load test 진행), 보통 해당 branch를 기준으로 ci 진행
  - dev: 개발을 위한 브랜치 (integretion test 진행)
  - feature: 단위 개발을 위한 브랜치 (Unit test 진행)
  - (hotfix) - main - (release) - develop - feature

- github flow
- gitlab flow

## Git flow 사용

- 현 local repo에 branch가 단일 branch인지 확인

- 원격저장소에는 main과 develop 브랜치만 존재해야 함

- git flow는 로컬에서 사용되는 전략이므로, 각 로컬 repo마다 적용해서 사용하면 된다

- git flow 초기화

  - $ git flow init
  - main / develop branch 생성시, branch명이 비어있다면, 채워줄 것

- git에 develop 브랜치 푸시

  - $ git push -u origin develop
  - u(upstream) option: 처음 올리는 브랜치의 경우 사용되는 옵션

- 단위 개발을 위한 feature 브랜치 생성

  - $ git flow feature start FEATURE_NAME

- 단위 개발 완료시 feature 브랜치 삭제 및 dev로 이동

  - $ git flow feature finish FEATURE_NAME

- 현 개발 단계 릴리즈

  - $ git flow release start RELEASE_NAME(태깅 컨벤션에 맞춰서)

- 태깅 컨벤션

  - a.b.c
    - a: 하위와의 호환이 안되는 등의 대규모 변화
    - b: 기능이 추가 되는 등의 적당히 변화
    - c: 기능의 수정 되는 등의 작은 변화

- 릴리즈에서 배포

  - $ git flow release finish RELEASE_NAME
  - 해당 작업을 진행하면,
  - 1 ) main을 기준으로 release를 merge
  - 2 ) tag를 생성
  - 3 ) develop을 기준으로 release를 merge

- 메인 브랜치 푸시

  - $ git checkout main
  - $ git push origin main

- 태그 푸시
  - $ git push --tag

## 그 밖의 것들

### 마일스톤

- due date
- 중간 점검을 하는 단계
- Phase 라고 많이 표현함

### 이슈

- 현재 작업에 대한 체크리스트

  - Description: 어떤 작업인지 설명 (sudo 코드에 가까움)
  - Tasks: todo list (checkList)

- 현재 작업에 대한 버그픽스

### projects

- 칸반으로 현재 이슈들을 시각화해서 보여줌

- backlog (생성해야 함): 해야할 일
- todo: 오늘 할 일
- in progress: 작업 진행
- review in progress: 리뷰 진행중
- review approved: 리뷰 통과
- done: 최종 통과 및 배포판에 반영

## 협업

- 두가지 협업 방법

### member invite

- issue와 projects 사용 가능
- 요새는 사용하지 않는 협업 방식

### fork

- 1 ) 이슈 등록
- 2 ) fork
- 3 ) 내 repo로 넘어온 프로젝트를 git clone
- 4 ) git flow init 및 git flow feature start ~ 로 작업 시작
- 5 ) 각 작업에 대해 작업 후, issue 갱신 및 로컬에서 commit
- 6 ) 이슈에 대한 작업이 전부 완료 됐을 때, 진행하는 commit에 대해서는 이슈의 넘버링과 commit 의 넘버링을 맞춰줘야 함
  - commit 내역
  - ```
      feat: ~
      resolve #ISSUE_NUM
    ```
    - fix: 이슈 수정
    - close: 이슈 종료
    - resolve: 이슈 해결
- 7 ) git push (-u) origin develop
- 8 ) git pull request

  - develop 에서 develop으로 가는지 꼭 확인 할 것
  - 제목은 이슈의 제목을 적어주면 된다
  - 내용은 "resolve #ISSUE_NUM" 을 적어주면 된다

- code review에 대한 permision

  - approve: 불완전하지만 넘어가기
  - change request: 요청사항을 만족해서 다시 요청할것 요구

- 최신화된 프로젝트를 참고하는 방법
  - 팀장
    - $ git fetch origin develop
    - $ git merge FETCH_HEAD
  - 팀원
    - $ git remote -v
    - $ git remote add upsteam https://~.git(팀장 repo)
    - $ git fetch upsteam develop
    - $ git merge FETCH_HEAD

# Pig the dice game
