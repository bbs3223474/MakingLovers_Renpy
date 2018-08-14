# MakingLovers_Renpy
SMEE社出品游戏Making Lovers的Ren'py移植版脚本源码，仅供学习使用！/ Ren'py transplanted game from SMEE's Making Lovers, only for study purpose!

简介：
====
由于个人非常喜欢SMEE的这款新作，所以闲来无事弄一弄移植。

Introduction:
====
I tried to make this transplanting project of SMEE's new game under spare time because I'm a huge fan of it.

紹介：
====
私はSMEE社の新作Making Loversの大ファンなんで、暇の時にこの移植プロジェクトを試したのです。

一些简要的注意事项：
----
Simple notices:
----
簡単な注意事項：
----

<p>1、本项目所涉及的开发，包括封包解压、脚本解密、资源文件使用、和内容修改均未获得SMEE公司及相关人员的参与和许可。本项目仅用于学习，严禁以任何形式重新加密、打包、二次出售！</p>
<p>1. The development of this project including archive unpacking, script decryption, resource using, and content modification were not being participated and approved by SMEE corporation and its staff. This project is only for study purpose. Any sort of re-encryption, repack and resell were STRICTLY FORBIDDEN!</p>
<p>1. 本プロジェクトに関する開発、及びアーカイブの抽出、スクリプトの明文化、リソースファイフの使用、ゲーム内容の改ざんはSMEE社とその関係者の参加と許可を得られていません。本プロジェクトは勉強のためだけですので、いかなる形の再暗号化、リパック、再発売行為は絶対禁止されています。</p>

***

<p>2、原游戏中存在严格的系统版本、语言的限制，本项目中已经将该限制去除，并在简体中文环境下制作。</p>
<p>2. Original version of this game was restricted to the edition and language of OS. This project removed them and was based on  simplified Chinese environment.</p>
<p>2. 原作では、厳重なるOSバージョンと言語の制限がかけています。本プロジェクトはその制限を解除し、簡体字の環境で作成しました。</p>

***

<p>3、用于解密游戏脚本的工具由xupefei开发，由我的好友huaying1988.com修改并编译，感谢他们的辛勤努力。</p>
<p>3. Script decripting tool was developed by xupefei, modified and compiled by my friend huaying1988.com. Thanks to their hard work.</p>
<p>3. スクリプト解読ツールはxupefeiさんが開発し、私の親友huaying1988.comが手入れてコンパイルしました。彼らの努力に心からの感謝を贈りします。</p>

***

<p>4、Ren'py游戏脚本.rpy文件由UNIX UTF-8 w/o BOM格式编码，请使用与之兼容的文本编辑器例如Notepad++打开和编辑。</p>
<p>4. Ren'py's game script .rpy files was coded by UNIX UTF-8 w/o BOM format, please open and edit them with supported text editor like Notepad++.</p>
<p>4. Ren'pyのゲームスクリプト.rpyファイルはUNIX UTF-8 w/o BOMフォーマットで編集したので、それらを支持するテキストエディター、例えばNotepad++で開き、編集するのをお願いします。</p>

***

<p>5、Ren'py引擎基于Python语言编写，虽然游戏脚本中很少涉及到真正的Python语言，但如果你有一定该语言的编程知识的话，某些复杂内容的理解会更轻松一些。该引擎脚本的编写教程请参见官方文档。</p>
<p>5. Ren'py engine was based on Python, you will find yourself easier to understand some complicated contents of it despite there are few actual python languages in the game scripts. Please view Ren'py official documents for engine script's tutorials.</p>
<p>5. Ren'pyはPython言語で作ったものです。ゲームスクリプトではわずかなPython言語しか見えないですが、それを少しでも習ったら複雑の内容を理解するのに役に立ちます。スクリプト作成のチュートリアルは公式ドキュメントで得られます。</p>

***

<p>6、本项目默认仅为Windows版本，如果你想编译Android或iOS版本的话，请参照官方文档进行操作。</p>
<p>6. This project is only for Windows by defalut. Please reference to official document if you need to complie Android or iOS version.</p>
<p>6. 本プロジェクトはWindowsのみ向いています。AndroidかiOSバージョンがコンパイルしたいのなら公式ドキュメントを参考してください。</p>

***

<p>7、本项目目前并未取得实质性进展，因为原作采用立绘图像分离的做法（身体、面部表情分离），暂未拥有很好的方法将立绘重新合并或在Ren'py中运用坐标系进行实时整合。</p>
<p>7. None of the substantial progress has been made on this project due to the separation character images (separated body and facial expression images). For now there is no good way to re-combine them or using coordinate function to combine in Ren'py real time.</p>
<p>7. 本プロジェクトは未だに実質的な進展はしていません。これは原作の中で立ち絵ファイルが分離しているのため（ボディー、表情ファイルが分離）、それらを再びコンバインするか、座標関数を使ってRen'pyにリアルタイムで統合するのにあまりいい方法がまだ見つかっていません。</p>

***
<p>8、原作封包文件提取原先采用AE-VN Tools进行操作，但后来发现因BURIKO General Interpreter引擎有一些更新，导致AE无法正常提取全部封包的内容，于是改用fxck BGI v2.4进行提取。所有位图文件已经自动添加.png后缀。</p>
<p>8. Archives was originally extracted by AE-VN Tools, but I discovered AE cannot extract some of them due to the tiny update of BURIKO General Interpreter engine. So I finally extracted them by fxck BGI v2.4 tool. All bitmaps were added by .png suffix.</p>
<p>8. 原作のアーカイブをAE-VN Toolsで抽出してみたんですが、BURIKO General Interpreterは少しだけ更新があって、一部の抽出が失敗した故、改めてfxck BGI v2.4でやりました。全ての画像ファイルは.png拡張子を添付されました。</p>
