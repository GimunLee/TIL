(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{420:function(t,a,s){"use strict";s.r(a);var e=s(27),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_08장-인그레스"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_08장-인그레스"}},[t._v("#")]),t._v(" 08장 인그레스")]),t._v(" "),s("ABG"),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"인그레스-개념"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#인그레스-개념"}},[t._v("#")]),t._v(" 인그레스 개념")]),t._v(" "),s("ul",[s("li",[t._v("인그레스는 클러스터 외부에서 안으로 접근하는 요청들을 어떻게 처리할지 정의해둔 규칙 모음")]),t._v(" "),s("li",[t._v("클러스터 외부에서 접근해야 할 URL을 사용할 수 있도록 하고, 트래픽 로드밸런싱, SSL 인증서 처리, 도메인 기반 가상 호스팅 제공")]),t._v(" "),s("li",[t._v("인그레스 자체는 이런 규칙들을 정의해둔 자원이고, 실제로 동작시키는 것은 인그레스 컨트롤러")]),t._v(" "),s("li",[t._v("ingress-nginx는 인그레스 컨트롤러와 인그레스를 연동하는 도구")]),t._v(" "),s("li",[t._v("ingress-nginx 컨트롤러는 인그레스에서 설정한 내용을 nginx 환경 설정으로 변경해서 nginx에 적용")])]),t._v(" "),s("h3",{attrs:{id:"인그레스-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#인그레스-설정"}},[t._v("#")]),t._v(" 인그레스 설정")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" extensions/v1beta1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Ingress\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("annotations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 인그레스 설정할 때 하위 필드 사용")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nginx.ingress.kubernetes.io/rewrite-target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" / "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# / 경로로 리다이렉트")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 하위 필드에 어떤 규칙을 사용할지 지정")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo.bar.com "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 이 주소로 요청이 들어오면")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /foos1 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 해당 path로 접근하면 ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 해당 서비스로 전송")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" s1\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("servicePort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /bars2\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" s2\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("servicePort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bar.foo.com\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" s2\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("servicePort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"ingress-nginx-컨트롤러"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ingress-nginx-컨트롤러"}},[t._v("#")]),t._v(" ingress-nginx 컨트롤러")]),t._v(" "),s("ul",[s("li",[t._v("인그레스는 설정일 뿐이고 설정 내용대로 동작하는 실제 주체는 인그레스 컨트롤러")]),t._v(" "),s("li",[t._v("쿠버네티스가 공식적으로 제공하는 것은 구글 컴퓨트 엔진용 ingress-gce와 nginx용 ingress-nginx")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"인그레스-ssl-설정하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#인그레스-ssl-설정하기"}},[t._v("#")]),t._v(" 인그레스 SSL 설정하기")]),t._v(" "),s("ul",[s("li",[t._v("인그레스를 이용하면 요청으로 들어오는 트래픽에 다양한 설정을 할 수 있음")]),t._v(" "),s("li",[t._v("인그레스로 SSL 인증서를 설정하면 파드 각각에 SSL 설정을 따로 할 필요가 없어 편리함")]),t._v(" "),s("li",[t._v("SSL 인증서 기한이 만료됐을 때도 인그레스에서만 인증서를 업데이트하면 됨")])]),t._v(" "),s("h3",{attrs:{id:"ssl-인증서-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssl-인증서-설정"}},[t._v("#")]),t._v(" SSL 인증서 설정")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ kubectl create secret tls kube-book-secret --key tls.key --cert tls.crt\n")])])]),s("h3",{attrs:{id:"시크릿을-인그레스에-적용하는-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#시크릿을-인그레스에-적용하는-설정"}},[t._v("#")]),t._v(" 시크릿을 인그레스에 적용하는 설정")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" extensions/v1beta1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Ingress\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ingress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ssl\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tls")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" kube"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("book.com "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 호스트 네임")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secretName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kube"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("book"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secret "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 만든 시크릿 이름 ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kube"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("book.com\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" s1\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("servicePort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"무중단-배포를-할-때-주의할-점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#무중단-배포를-할-때-주의할-점"}},[t._v("#")]),t._v(" 무중단 배포를 할 때 주의할 점")]),t._v(" "),s("ul",[s("li",[t._v("새로운 파드(v2)가 생성되고 헬스 체크가 성공한 후 트래픽을 파드(v2) 쪽으로 전송")]),t._v(" "),s("li",[t._v("그후 파드(v1) 쪽으로 보내던 트래픽을 중단한 후 파드(v1)을 제거")])]),t._v(" "),s("h3",{attrs:{id:"maxsurge와-maxunavailable-필드-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maxsurge와-maxunavailable-필드-설정"}},[t._v("#")]),t._v(" maxSurge와 maxUnavailable 필드 설정")]),t._v(" "),s("ul",[s("li",[t._v("파드 관리를 RollingUpdate로 설정했을 때 .maxSurge와 .maxUnavailable 필드 설정이 필요")]),t._v(" "),s("li",[t._v("디플로이먼트를 이용해서 컨테이너를 배포할 때 .maxSurge 필드에는 디플로이먼트에 설정된 기본 파드 개수에 여분의 파드를 몇개 추가할 수 있는지 설정 가능")]),t._v(" "),s("li",[t._v(".maxUnavailalbe 필드에는 디플로이먼트를 업데이트하는 동안 몇 개의 파드를 이용할 수 없어도 되는지 설정")])]),t._v(" "),s("h3",{attrs:{id:"파드가-readinessprobe를-지원하는지-확인"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#파드가-readinessprobe를-지원하는지-확인"}},[t._v("#")]),t._v(" 파드가 readinessProbe를 지원하는지 확인")]),t._v(" "),s("ul",[s("li",[t._v("무중단 배포에서 신경 써서 봐야할 프로브는 readinessProbe")]),t._v(" "),s("li",[t._v("readinessProbe는 실제로 컨테이너가 서비스 요청을 처리할 준비가 되었는지 진단")]),t._v(" "),s("li",[t._v("readinessProbe가 OK 상태여야 해당 파드와 연결된 서비스에 파드의 IP가 추가되고 트래픽을 받을 수 있음")]),t._v(" "),s("li",[t._v("컨테이너 자체에 readinessProbe를 설정하기 어려운 상황이라면 .spec.minReadySeconds 필드를 이용해 어느 정도 readinessProbe와 비슷한 효과를 낼 수 있음")])]),t._v(" "),s("h3",{attrs:{id:"쿠버네티스와-컨테이너-안에-그레이스풀-종료-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#쿠버네티스와-컨테이너-안에-그레이스풀-종료-설정"}},[t._v("#")]),t._v(" 쿠버네티스와 컨테이너 안에 그레이스풀 종료 설정")]),t._v(" "),s("ul",[s("li",[t._v("노드 안 컨테이너를 관리하는 컴포넌트인 kubelet은 새 파드가 실행되고 이전 파드를 종료할 때 파드에 SIGTERM 신호를 먼저 전송")]),t._v(" "),s("li",[t._v("무중단 배포를 하려면 컨테이너에서 SIGTERM 신호를 받았을 때 기존에 받은 요청만 처리를 완료하고 새 요청을 받지 않는 그레이스풀 종료가 설정되어 있어야함")]),t._v(" "),s("li",[t._v("kubelet에서 파드에 SGTERM 신호를 보낸 후 일정 시간동안 그레이스풀 종료가 되지 않으면 강제로 SIGKILL 신호를 보내서 파드를 종료")]),t._v(" "),s("li",[t._v("대기 시간은 .terminationGracePeriodSeconds 필드로 설정 가능(기본 대기 시간은 30초)")]),t._v(" "),s("li",[t._v("그레이스풀 종료를 설정하지 못할 때, 프리스톱 훅(prestop hook)을 이용할 수 있음")]),t._v(" "),s("li",[t._v("쿠버네티스에서는 파드 생명 주기 중 훅을 설정할 수 있는데, "),s("strong",[t._v("파드가 실행된 직후 실행하는 포스트스타트 훅과 파드가 종료되기 직전 실행되는 프리스톱 훅")])]),t._v(" "),s("li",[t._v("하지만 이렇게 프리스톱 훅으로 대기 시간을 설정하더라도 .terminationGracePeriodSeconds 필드에 설정한 대기 시간을 초과한다면 프로세스 종료 발생 가능")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"무중단-배포-테스트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#무중단-배포-테스트"}},[t._v("#")]),t._v(" 무중단 배포 테스트")]),t._v(" "),s("h3",{attrs:{id:"deployment-yaml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deployment-yaml"}},[t._v("#")]),t._v(" deployment.yaml")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" extensions/v1beta1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" websample\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" websample\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("strategy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rollingUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxSurge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25% "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 기본 파드 개수의 25%만큼 파드를 더 추가할 수 있음")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxUnavailable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25% "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 디플로이먼트를 업데이트하는 동안 기본 파드 개수의 25%만큼의 파드를 이용할 수 없음")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" RollingUpdate\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" websample\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" acadx0/190713"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v1\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("imagePullPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Always\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" websample\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("protocol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TCP\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("livenessProbe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("httpGet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HTTPGetAction 핸들러를 사용해 컨테이너 진단")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /liveness\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("readinessProbe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("httpGet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HTTPGetAction 핸들러를 사용해 컨테이너 진단")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /readiness\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lifecycle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("preStop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("httpGet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /prestop\n              "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("terminationGracePeriodSeconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n")])])]),s("h3",{attrs:{id:"ingress-yaml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ingress-yaml"}},[t._v("#")]),t._v(" ingress.yaml")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" extensions/v1beta1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Ingress\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" websample"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ing\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//127.0.0.1.xip.io\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" websample\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("servicePort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /\n")])])]),s("ul",[s("li",[t._v("지속적 요청을 보내며 배포 테스트를 진행할 수 있는 베게타라는 부하 테스트 도구 이용해 진행")]),t._v(" "),s("li",[t._v("실시간 모니터링 도구 스턴(stern)의 "),s("code",[t._v("stern websample")]),t._v(" 명령으로 로그를 확인해보면 애플리케이션 측명에서의 무중단 배포 과정을 좀 더 쉽게 확인 가능")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"referenses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#referenses"}},[t._v("#")]),t._v(" Referenses")]),t._v(" "),s("ul",[s("li",[t._v("쿠버네티스 입문 - 90가지 예제로 배우는 컨테이너 관리 자동화 표준 / 동양북스")])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);