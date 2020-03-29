# Web Server와 WAS의 차이

<AssembledByGimunLee>

## Web Server

Web Server는 소프트웨어와 하드웨어로 구분된다.

- **하드웨어:** Web 서버가 설치되어 있는 컴퓨터
- **소프트웨어:** 웹 브라우저 클라이언트로부터 HTTP 요청을 받아 정적인 컨텐츠(.html .jpeg .css 등)를 제공하는 컴퓨터 프로그램

Web Server는 HTTP 프로토콜을 기반으로 클라이언트(웹 브라우저 또는 웹 크롤러)의 요청을 서비스 하는 기능을 담당한다.
요청에 따라 아래의 두 가지 기능 중 적절하게 선택하여 수행한다. 

**Web Server의 주요 기능**

1. 정적인 컨텐츠 제공

   WAS를 거치지 않고 바로 자원을 제공한다.

2. 동적인 컨텐츠 제공을 위한 요청 전달

   클라이언트의 요청(Request)을 WAS에 보내고, WAS가 처리한 결과를 클라이언트에게 전달(응답, Response)한다. 클라이언트는 일반적으로 웹 브라우저를 의미한다.

Web Server에는 **Apache Server, Nginx, IIS(Windows 전용 Web 서버)** 등이 있다.

<br/>

## WAS(Web Application Server)

<img src="./resources/web-server-was-diff-001.png">

WAS는 DB 조회나 다양한 로직 처리를 요구하는 `동적인 컨텐츠를 제공하기 위해 만들어진 Application Server`이다. 또한, HTTP를 통해 컴퓨터나 장치에 애플리케이션을 수행해주는 미들웨어(소프트웨어 엔진)이다. **웹 컨테이너(Web Container)** 혹은 **서블릿 컨테이너(Servlet Container)** 라고도 불린다. Container란 JSP, Servlet을 실행시킬 수 있는 소프트웨어를 말한다. 

즉, WAS는 JSP, Servlet 구동 환경을 제공하고, Web Server 기능들을 구조적으로 분리하여 처리하고자하는 목적으로 제시되었다. 분산 트랜잭션, 보안, 메시징, 쓰레드 처리 등의 기능을 처리하는 분산 환경에서 사용되며 주로 DB 서버와 같이 수행된다. 

**WAS의 주요 기능**

1. 프로그램 실행 환경과 DB 접속 기능 제공

2. 여러 개의 트랜잭션(논리적인 작업 단위) 관리 기능

3. 업무를 처리하는 비즈니스 로직 수행

**WAS 동작 프로세스**

1. Web Server로부터 요청이 오면 컨테이너가 받아서 처리한다.

2. 컨테이너는 web.xml을 참조하여 해당 서블릿에 대한 `쓰레드 생성`하고 httpServletRequest와 httpServletResponse 객체를 생성하여 전달한다.

3. 컨테이너는 서블릿을 호출한다.

4. 호출된 서블릿의 작업을 담당하게 된 쓰레드(2번에서 만든 쓰레드)는 doPost()또는 doGet()을 호출한다.

5. 호출된 doPost(), doGet() 메소드는 생성된 동적 페이지를 Response 객체에 담아 컨테이너에 전달한다.

6. 컨테이너는 전달받은 Response객체를 HTTPResponse형태로 바꿔 Web Server에 전달하고 생성되었던 쓰레드를 종료하고 httpServletRequest, httpServletResponse 객체를 소멸시킨다.

WAS에는 **Tomcat, JBoss, Jeus, Web Sphere** 등이 있다.

<br/>

## References

- [Web Server와 WAS의 차이와 웹 서비스 구조](https://gmlwjd9405.github.io/2018/10/27/webserver-vs-was.html)
- [웹 서버(Web Server) 와 WAS 란?](https://hoon-k.tistory.com/5)