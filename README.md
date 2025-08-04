
# google插件_多平台購物搜尋器

Description


<!-- PROJECT LOGO -->
<br />

<p align="center">
  <h3 align="center">aicup_2023</h3>
  <p align="center">
    aicup_2023_TEAM_3974的程式
    <br />
    <a href="https://github.com/your_github_name/your_repository"><strong>探索本專案的文檔 »</strong></a>
    <br />
    <br />
    <a href="https://github.com/your_github_name/your_repository">查看Demo</a>
    ·
    <a href="https://github.com/your_github_name/your_repository/issues">報告Bug</a>
    ·
    <a href="https://github.com/your_github_name/your_repository/issues">提出新特性</a>
  </p>

</p>


 本篇README.md面向開發者
 
## 目錄

- [上手指南](#上手指南)
  - [開發前的配置要求](#開發前的配置要求)
  - [步驟](#步驟)
- [檔目錄說明](#檔目錄說明)
- [開發的架構](#開發的架構)
- [部署](#部署)
- [使用到的框架](#使用到的框架)
- [版本控制](#版本控制)

### 上手指南





###### 開發前的配置要求

1. Windows 11
2. Colaboratory

###### **步驟**

1.將訓練資料集存放於google雲端硬碟
2.使用Colaboratory執行AICUP_Pythia.ipynb檔案
3.調整模型參數及訓練參數
4.將資料進行前處理
5.將處理後的病歷文本檔案存放於google雲端硬碟
6.將文本檔案匯入模型
7.開始預測，產出answer.txt檔案


### 檔目錄說明
eg:

```
filetree
├── /訓練資料集/
│  └── opendid_all.tsv
│  └── opendid_set1.tsv
│  └── opendid_set2.tsv
├── /資料前處理/
│  └── Data__reprocessing.ipynb
├── AICUP_Pythia.ipynb
├── README.md

```





### 開發的架構 

請閱讀……

### 部署

暫無

### 使用到的框架

- [transformers](https://huggingface.co/docs/transformers/index)
- [datasets](https://huggingface.co/docs/datasets/index)
- [torch](https://pytorch.org/)
- [tqdm](https://github.com/tqdm/tqdm)

### 版本控制

該專案使用Git進行版本管理。您可以在repository參看當前可用版本。

### 作者

C110154243@nkust.edu.tw
C110154254@nkust.edu.tw

 *您也可以在貢獻者名單中參看所有參與該專案的開發者。*

### 版權說明

該項目簽署了MIT 授權許可，詳情請參閱 [LICENSE.txt](https://github.com/your_github_name/your_repository/blob/master/LICENSE.txt)

