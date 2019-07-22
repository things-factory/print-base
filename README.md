# print-base

## printer.js 모듈에서 요구하는 프린터 이름 확인 방법

### Unix & MacOS

- CUPS 드라이버에서 확인
  1. localhost:631로 접속
  2. Printers 탭으로 이동 (웹 인터페이스 활성화)
  3. Queue Name 항목을 사용하면 됩니다.

- 기본 프린터 매니저에서 확인(MacOS)
  1. 시스템 환경설정
  2. 프린터 및 스캐너
  3. (프린터 선택) - 옵션 및 소모품
  4. 기기 이름을 사용하면 됩니다.
