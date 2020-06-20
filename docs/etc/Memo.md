# Memo

<ABG/>

## SourceTree에서 git-flow 배포 에러

- **Error**

  `fatal: could not read Username for 'https://github.com': Device not configured Fatal: Could not fetch release/v1.10.0 from origin.`

- **Solution**

  ```bash
  $ cd {해당 디렉토리}
  $ git config credential.helper
  // osxkeychain
  $ git config credential.helper sourcetree
  $ git config credential.helper
  // sourcetree
  ```

<br/>

## git config 편집

```bash
$ git config -e 
$ git config --global -e // global 설정 편집
```





