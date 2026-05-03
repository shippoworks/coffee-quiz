-- =============================================
-- Levels
-- =============================================
DELETE FROM questions;
DELETE FROM levels;

INSERT INTO levels (id, title, question_count, is_published) VALUES
  (1, 'Level 1 — コーヒーの世界へようこそ', 10, 1),
  (2, 'Level 2 — 産地と品種を知る', 10, 1),
  (3, 'Level 3 — 焙煎と抽出の科学', 10, 1),
  (4, 'Level 4 — 器具とレシピ', 10, 1),
  (5, 'Level 5 — スペシャルティコーヒーの世界', 10, 1),
  (6, 'Level 6', 0, 0),
  (7, 'Level 7', 0, 0),
  (8, 'Level 8', 0, 0),
  (9, 'Level 9', 0, 0),
  (10, 'Level 10', 0, 0),
  (11, 'Level 11', 0, 0),
  (12, 'Level 12', 0, 0),
  (13, 'Level 13', 0, 0),
  (14, 'Level 14', 0, 0),
  (15, 'Level 15', 0, 0);

-- =============================================
-- Level 1 — コーヒーの世界へようこそ
-- =============================================
INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (1, 'コーヒーの原産地はどこでしょう？',
   'ブラジル', 'エチオピア', 'コロンビア', 'インドネシア',
   1,
   'エチオピアのカファ地方が原産とされています。「ヤギが赤い実を食べて元気になった」というカルディの伝説が有名で、9世紀頃から飲用されてきたと言われています。',
   1);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (1, 'コーヒーチェリーの中に、豆は通常いくつ入っている？',
   '1つ', '2つ', '4つ', '6つ',
   1,
   'コーヒーチェリーの中には通常2つの種子（コーヒー豆）が向かい合わせに入っています。1つだけ入った丸い豆は「ピーベリー」と呼ばれ、希少で風味が凝縮されているとも言われます。',
   2);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (1, '世界で最も多く流通しているコーヒーの2大品種は？',
   'ゲイシャ種とブルボン種', 'アラビカ種とカネフォラ（ロブスタ）種', 'ティピカ種とマラゴジッペ種', 'リベリカ種とエクセルサ種',
   1,
   '世界の生産量の約60%がアラビカ種、約40%がカネフォラ（ロブスタ）種です。アラビカは香り豊かで酸味がある一方、ロブスタはカフェインが多く苦味が強いのが特徴です。',
   3);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (1, '浅煎り・中煎り・深煎りのうち、最も酸味が強いのは？',
   '深煎り', '中煎り', '浅煎り', 'どれも同じ',
   2,
   '浅煎りはコーヒー本来の果実感や酸味が残りやすく、フルーティーな風味が特徴です。焙煎が深まるほど酸味が減り、苦味やロースト感が強くなっていきます。',
   4);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (1, 'コーヒー特有の香ばしい香りが生まれる主な工程は？',
   '収穫', '精製', '焙煎', '保存中',
   2,
   '生豆は青臭く香りが少ないですが、焙煎の加熱でメイラード反応などの化学変化が起き、800種以上の香気成分が生まれます。コーヒーらしい香りは焙煎が生み出しています。',
   5);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (1, '1杯分（約150ml）のドリップコーヒーに使う豆の目安量は？',
   '約3g', '約10〜12g', '約25g', '約50g',
   1,
   '一般的なドリップコーヒー1杯（約150ml）には10〜12gの豆が目安です。少なすぎると薄く、多すぎると濃くなりすぎます。好みや豆の特性に合わせて調整しましょう。',
   6);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (1, 'コーヒー豆の保存方法として正しいのは？',
   '挽いて紙袋で常温保存', '直射日光で乾燥させる', '密閉容器に入れ冷暗所で保存', '水に浸けて保存',
   2,
   'コーヒー豆の天敵は酸素・光・湿気・熱です。密閉容器に入れて冷暗所で保存することで酸化を遅らせ、香りと風味を長持ちさせられます。',
   7);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (1, 'カフェインの主な作用として正しいのは？',
   '眠気を促進する', '体温を急激に下げる', '覚醒・集中力を高める', '血圧を大幅に下げる',
   2,
   'カフェインは脳内でアデノシン受容体をブロックし、眠気を抑えて覚醒状態を保つ作用があります。適度な摂取はリフレッシュに役立ちますが、過剰摂取は不眠や動悸の原因になることもあります。',
   8);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (1, 'ドリップで「蒸らし」をする主な目的は？',
   'コーヒーを冷ますため', 'カフェインを取り除くため', '苦味を強めるため', '豆全体を均一に湿らせ炭酸ガスを抜くため',
   3,
   '焙煎豆には炭酸ガスが含まれており、蒸らしでガスを逃がすことでお湯がコーヒー粉に均一に浸透します。蒸らし不足だと抽出にムラが出て味が安定しません。',
   9);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (1, 'コーヒーの抽出に最適とされる湯温の範囲は？',
   '60〜70℃', '75〜80℃', '90〜96℃', '100℃（沸騰したまま）',
   2,
   '90〜96℃が最も成分をバランスよく引き出せるとされています。高すぎると過抽出で苦みが強調され、低すぎると未抽出で酸味が鋭くなります。沸騰直後は少し冷ましてから使いましょう。',
   10);

-- =============================================
-- Level 2 — 産地と品種を知る
-- =============================================
INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (2, 'エチオピア産コーヒーに多い風味の特徴は？',
   'チョコレートとナッツ', 'スモーキーで土っぽい', 'フローラル・ベリー系のフルーティーさ', '強い苦味とロースト感',
   2,
   'エチオピア産コーヒーはジャスミンやブルーベリーのようなフローラル・フルーティーな風味で知られます。イルガチェフェやシダモなどの産地名が有名です。',
   1);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (2, 'ブラジルのコーヒーによく見られる風味は？',
   '強い酸味とハーブ感', 'ナッツ・チョコレート・低い酸味', 'スパイシーで花のような香り', 'ワインのような発酵感',
   1,
   'ブラジルは世界最大のコーヒー生産国で、ナッツ・チョコレート系の風味と穏やかな酸味が特徴です。ブレンドのベースとしても広く使われます。',
   2);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (2, 'コーヒー栽培に適した「コーヒーベルト」とは？',
   '北緯・南緯23.5度以内の熱帯・亜熱帯地帯', 'ヨーロッパ全土', '北極圏周辺の地域', '標高0〜100mの低地のみ',
   0,
   'コーヒーはトロピック・オブ・キャンサー（北回帰線）とトロピック・オブ・カプリコーン（南回帰線）の間、通称「コーヒーベルト」に属する地域で主に栽培されます。',
   3);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (2, '「ゲイシャ（ゲシャ）種」が世界的に注目される理由は？',
   'カフェインが最も多い', '栽培が簡単で収量が多い', '豆が最大級の大きさ', '独特のフローラル・ジャスミン香と複雑な風味',
   3,
   'ゲイシャ種はエチオピア原産で、パナマのハシエンダ・ラ・エスメラルダ農園での栽培で世界的に注目されました。ジャスミン・ピーチ・紅茶のような風味が特徴で、国際オークションで高値がつくことも多いです。',
   4);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (2, '「ナチュラル（自然乾燥）精製」の特徴は？',
   '水洗いして素早く乾燥させる', '化学薬品で果肉を除去する', '果肉を残したまま乾燥させ、甘い発酵感が出る', '豆を冷凍乾燥させる',
   2,
   'ナチュラル精製は収穫したコーヒーチェリーをそのまま天日乾燥する方法です。果肉の糖分と酵母が豆に影響を与え、フルーティーで甘い発酵感が生まれます。',
   5);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (2, '「ウォッシュド（水洗）精製」の特徴は？',
   '果肉の糖分が豆に染み込む', '塩水に漬けて精製する', '豆を焙煎後に水洗いする', '果肉を除去し水洗いするため、クリーンで明確な風味になる',
   3,
   'ウォッシュド精製は果肉を機械で除去後、ミューシレージを水で洗い流して乾燥させます。豆のポテンシャルがストレートに出やすく、酸味が明確でクリーンな印象になります。',
   6);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (2, '標高が高い産地のコーヒーが高く評価される理由は？',
   '栽培が簡単になる', '気温が低くチェリーがゆっくり成熟し、風味が複雑になる', '害虫が多く豆が硬くなる', '水分が多く含まれ味が濃くなる',
   1,
   '標高が高いほど気温が低く、コーヒーチェリーがゆっくり成熟します。これにより糖分や酸が豊富に蓄積され、複雑で豊かな風味になります。スペシャルティコーヒーの産地は概して高地です。',
   7);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (2, 'コロンビアコーヒーの代表的な特徴は？',
   '非常に強い苦味と土臭さ', 'まったく酸味がない', 'バランスの取れた酸味・甘み・コク', 'スモーキーで重厚',
   2,
   'コロンビアはアンデス山脈の高地と年2回収穫できる気候に恵まれています。バランスの良い酸味・甘み・コクが特徴で、世界的に高い評価を受けています。',
   8);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (2, '「ピーベリー」とは何？',
   '欠点豆の一種', 'ロブスタ種の別名', '過度に焙煎された豆', 'コーヒーチェリーに1粒だけ入った丸い豆',
   3,
   '通常コーヒーチェリーには2粒の豆が入っていますが、受粉の不具合などで1粒だけ入ることがあります。これをピーベリーと呼び、丸みを帯びた形が特徴で、風味が凝縮されているとも言われます。',
   9);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (2, 'インドネシア（マンデリン等）のコーヒーの風味特徴は？',
   'フローラルで軽い', 'フルーティーで明るい酸味', '甘くワインのような発酵感', 'どっしりしたボディ・アーシー・スパイシー',
   3,
   'スマトラ島のマンデリンに代表されるインドネシア産コーヒーは、独特のスマトラ式精製（ウェットハル）によりどっしりした重厚なボディと、土っぽさ・スパイシーさが特徴です。',
   10);

-- =============================================
-- Level 3 — 焙煎と抽出の科学
-- =============================================
INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (3, '焙煎中の「一ハゼ（ファーストクラック）」とは？',
   '豆が最初に黒くなる瞬間', '焙煎を終了するサイン', '豆内部の水蒸気・ガスの圧力で豆が弾ける音', '豆にカビが発生する段階',
   2,
   '焙煎中、豆の内部温度が上がると水分が水蒸気になり、豆が膨張して「バチバチ」とはじける音がします。これが一ハゼです。浅煎りはこの前後で止め、深煎りは二ハゼ以降まで続けます。',
   1);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (3, '「過抽出」になったコーヒーの味の特徴は？',
   '薄くて水っぽい', '甘くてフルーティー', '酸味が強くなる', '苦くて渋みやえぐみがある',
   3,
   '過抽出は必要以上の成分が溶け出した状態で、不快な苦味・渋み・えぐみが出ます。原因は湯温が高すぎる、接触時間が長い、粉が細かすぎるなどです。',
   2);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (3, '「未抽出（アンダーエクストラクション）」のコーヒーの味は？',
   '苦くて重い', '薄くて鋭い酸味・軽すぎる', 'チョコレートのようにまろやか', 'えぐみがある',
   1,
   '未抽出は成分が十分に溶け出していない状態です。薄くて鋭い酸味が目立ちます。湯温が低い、接触時間が短い、粉が粗すぎることが主な原因です。',
   3);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (3, 'コーヒー抽出に最適とされる一般的な湯温は？',
   '60〜70℃', '75〜80℃', '90〜96℃', '100℃（沸騰したまま）',
   2,
   '90〜96℃が最も成分をバランスよく引き出せるとされています。沸騰直後は少し冷ましてから使うのがポイントです。浅煎りには高め、深煎りには低めの温度を使う場合もあります。',
   4);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (3, 'エスプレッソ抽出で使う圧力の目安は？',
   '約0.5気圧', '約3気圧', '約9気圧', '約20気圧',
   2,
   'エスプレッソは約9気圧の高圧でお湯を通し、短時間（約25〜30秒）で濃縮したコーヒーを抽出します。この高圧が独特のクレマ（泡）と濃密な風味を生み出します。',
   5);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (3, 'グラインドサイズ（粒度）とコーヒーの関係は？',
   '粗いほど苦くなる', '粒度は味にほとんど影響しない', '細かいほど抽出が遅く成分が出にくい', '細かいほど表面積が増え、成分が抽出されやすくなる',
   3,
   '粒度が細かいほど表面積が増え、お湯との接触が増えて成分が出やすくなります。エスプレッソは極細挽き、フレンチプレスは粗挽きが適しています。用途に合わせた調整が重要です。',
   6);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (3, 'フレンチプレスの最大の特徴は？',
   'ペーパーで微粉をしっかり除去する', '高圧で素早く抽出する', '金属フィルターで豆の油分ごと抽出する', '低温で長時間かけて抽出する',
   2,
   'フレンチプレスは金属フィルターを使うため、豆の油分（脂質）や微粉もそのままコーヒー液に残ります。これにより口当たりが重厚でどっしりした風味になります。',
   7);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (3, 'コーヒーの「TDS」とは何を指す？',
   'コーヒーの温度', '豆の硬さ', 'カフェイン量の単位', 'コーヒーに溶け出した成分の濃度',
   3,
   'TDS（Total Dissolved Solids）はコーヒー液中に溶け出した成分の割合を示します。SCA（スペシャルティコーヒー協会）は理想のTDSを1.15〜1.35%と定めており、濃度のバロメーターになります。',
   8);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (3, '焙煎豆の表面に浮き出る油分（テカリ）が増える理由は？',
   '豆が腐敗しているサイン', '深煎りになるほど内部の油分が表面に滲み出てくる', '保存状態が悪い証拠', '水分が表面に出てきたもの',
   1,
   '焙煎が深まると豆の細胞壁が壊れ、内部に含まれる油分（脂質）が表面に滲み出てきます。これは深煎りの自然な現象で、腐敗とは異なります。ただし酸化が進むと風味が落ちるため早めに使いましょう。',
   9);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (3, 'ドリップで「蒸らし」に使うお湯の量の目安は？',
   '粉の重量の0.5倍', '粉の重量の約2〜3倍', '粉の重量の10倍', '決まっていない',
   1,
   '蒸らしでは粉の重量の2〜3倍程度のお湯を全体に回しかけ、30〜45秒ほど待ちます。この量でコーヒー粉が程よく湿り、炭酸ガスをしっかり放出できます。',
   10);

-- =============================================
-- Level 4 — 器具とレシピ
-- =============================================
INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (4, 'HARIOの「V60」ドリッパーの特徴は？',
   '平底でリブが少なく均一に抽出される', '電動でお湯を自動的に回す', '60度の角度とスパイラルリブでお湯の流速を調整できる', '豆を直接湯に浸す',
   2,
   'V60はその名の通り60度の角度を持つ円錐形で、内側のスパイラルリブが空気の逃げ道を作ります。注ぎ方でお湯の流速を自在にコントロールでき、バリスタの技術が反映されやすい器具です。',
   1);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (4, 'カフェラテとカプチーノの主な違いは？',
   '使う豆の種類が違う', 'ミルクの温度が違う', 'ミルクフォームの量と割合が違う', 'エスプレッソの量が倍以上違う',
   2,
   'カフェラテはエスプレッソにスチームミルクを多く加えたもので、フォームは少なめ。カプチーノはエスプレッソ・スチームミルク・ミルクフォームをほぼ1:1:1で合わせたものです。',
   2);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (4, 'モカポット（直火式エスプレッソメーカー）の仕組みは？',
   '電気で高圧を発生させる', '蒸気圧でお湯を上昇させてコーヒーを抽出する', '豆を水に浸して発酵させる', 'マイクロ波で加熱する',
   1,
   'モカポットは下部タンクを加熱して発生した蒸気圧で、コーヒー粉の層を通してお湯を上部へ押し上げる仕組みです。家庭でエスプレッソに近い濃いコーヒーを手軽に作れます。',
   3);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (4, 'コールドブリュー（水出しコーヒー）の特徴は？',
   '熱湯を使うため短時間で完成する', 'カフェインが完全にゼロになる', '豆は浅煎りでないと作れない', '低温でゆっくり抽出するため、酸味が少なくまろやかになる',
   3,
   'コールドブリューは常温〜冷水で8〜24時間かけてゆっくり抽出します。熱を使わないため酸の変質が少なく、まろやかで甘みのある味わいになります。カフェイン量はむしろ多めになる傾向があります。',
   4);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (4, '「アメリカーノ」とは何？',
   'エスプレッソに牛乳を加えたもの', 'エスプレッソに少量のお湯を加えて希釈したもの', 'ドリップコーヒーに砂糖を加えたもの', 'デカフェのエスプレッソ',
   1,
   'アメリカーノはエスプレッソにお湯を加えてドリップコーヒーに近い濃度に希釈したものです。第二次大戦中、アメリカ兵がイタリアのエスプレッソを薄めて飲んだのが起源とされています。',
   5);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (4, '「フラットホワイト」の特徴は？',
   'ブラックコーヒーを薄めたもの', 'アイスラテの別名', 'デカフェラテのこと', '少量のシルキーなフォームを持つ小ぶりなミルクコーヒー（豪州発祥）',
   3,
   'フラットホワイトはオーストラリア・ニュージーランド発祥で、ダブルエスプレッソにごく少量のシルキーなスチームミルクを合わせます。カフェラテより小さく、コーヒー感が強いのが特徴です。',
   6);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (4, 'ケメックス（Chemex）の特徴は？',
   '電動で自動的に注ぐ', '圧力抽出で濃いコーヒーを作る', '厚手の専用フィルターでオイルをしっかり除去し、クリーンな味わい', '豆を氷の上に置いて抽出する',
   2,
   'ケメックスは1941年にデザインされた木とガラスのドリッパーで、通常より厚いボンデッドフィルターを使います。微粉や油分をしっかり除き、非常にクリーンで明るい味わいになります。',
   7);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (4, 'トルコ式コーヒー（ターキッシュコーヒー）の特徴は？',
   'ペーパーフィルターで丁寧に濾す', 'エスプレッソマシンで作る', 'コールドブリューで作る', '極細挽きの粉を砂糖と一緒に煮出す',
   3,
   'トルコ式コーヒーはイブリック（ジェズベ）という小鍋で、極細挽きの粉・砂糖・水を一緒に煮立てます。フィルターは使わず、粉がカップの底に沈んだ上澄みを飲みます。',
   8);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (4, 'エアロプレスの最大の特徴は？',
   '高圧の電気を使う', '必ず冷たいコーヒーしか作れない', '1回で10杯以上作れる', '空気圧で押し出して抽出するため、短時間で多様なレシピが試せる',
   3,
   'エアロプレスはプランジャーを押す空気圧でコーヒーを抽出します。抽出時間・粒度・温度など多くの変数を調整できるため、バリスタチャンピオンシップでも使われる万能な器具です。',
   9);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (4, 'サイフォン式コーヒーの仕組みは？',
   '高圧蒸気で瞬間抽出する', '電子レンジで加熱する', '冷水をゆっくり通す', 'アルコールランプ等の熱で水蒸気を上昇させ、浸漬抽出する',
   3,
   'サイフォンは下部フラスコを加熱して水蒸気圧で上部ロートにお湯を押し上げ、コーヒー粉と接触させて抽出します。冷えると液体が下に戻る仕組みで、クリーンで明るい風味が特徴です。',
   10);

-- =============================================
-- Level 5 — スペシャルティコーヒーの世界
-- =============================================
INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (5, '「スペシャルティコーヒー」のSCA基準でのカッピングスコアは？',
   '70点以上', '75点以上', '80点以上', '90点以上',
   2,
   'SCA（スペシャルティコーヒー協会）では100点満点のカッピングスコアで80点以上を「スペシャルティ」と認定します。フレーバー・酸味・ボディ・バランスなどの項目で評価されます。',
   1);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (5, '「アナエロビック（嫌気性）発酵」精製の特徴は？',
   '水中で豆を発酵させる', '紫外線で殺菌しながら乾燥させる', '豆を土中に埋めて熟成させる', '密閉タンクで酸素を遮断して発酵させ、独特の複雑な風味を生む',
   3,
   'アナエロビック精製は密閉タンク内で酸素を遮断し、嫌気性微生物によって発酵させます。ワイン・洋酒・熱帯フルーツのような複雑なフレーバーが生まれ、近年のスペシャルティコーヒー界で注目されています。',
   2);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (5, 'エスプレッソ表面の「クレマ」とは？',
   'コーヒー豆の外皮', '焙煎後に豆表面に出る油', 'コーヒーの沈殿物', 'エスプレッソ抽出時に表面に浮かぶ黄金色の泡',
   3,
   'クレマはエスプレッソを高圧抽出する際に、豆に含まれる炭酸ガスと油分が乳化して生まれる泡です。新鮮な豆ほど豊かなクレマが出ます。クレマの色と質でエスプレッソの状態が分かります。',
   3);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (5, '「第三の波（サードウェーブ）」コーヒーの特徴は？',
   'インスタントコーヒーの普及', 'コーヒーチェーンの大量生産・均一化', 'ロブスタ種の再評価', '産地・農家・精製方法を重視したシングルオリジン・精巧な抽出',
   3,
   'サードウェーブコーヒーは2000年代以降に広まった動きで、コーヒーをワインのように「産地・品種・精製・焙煎」まで細かく掘り下げます。農家との直接取引（ダイレクトトレード）や浅煎りの多様な風味表現が特徴です。',
   4);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (5, '「カップ・オブ・エクセレンス（COE）」とは？',
   'カフェチェーンのメニュー名', 'バリスタの資格名', 'コーヒー抽出器具のブランド名', '生産国別に行われる最高品質のコーヒー競技会・オークション',
   3,
   'Cup of Excellenceはブラジル・コロンビアなどの生産国で開催されるコーヒー品質競技会です。審査を通過したロットはオンラインオークションで世界中のロースターが入札でき、落札価格は通常の何倍にも及ぶことがあります。',
   5);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (5, '「ダイレクトトレード」とは？',
   'コーヒーを現金のみで購入する制度', 'コーヒーを航空便で輸送する方法', 'オンラインのみで販売する手法', 'ロースターや購入者が農家と直接交渉・取引を行うこと',
   3,
   'ダイレクトトレードはロースターや輸入業者が中間業者を介さずに生産農家と直接取引する方式です。農家への還元率が高まり、品質管理・トレーサビリティも向上します。フェアトレードとは異なる概念です。',
   6);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (5, '「カスカラ」とは？',
   'コーヒー豆の一種', 'コーヒーの精製機械', 'ロブスタ種の別名', 'コーヒーチェリーの果皮・果肉を乾燥させたハーブティー',
   3,
   'カスカラはアラビア語で「殻」を意味し、コーヒーチェリーの果皮・果肉を乾燥させたものをお湯に浸出したドリンクです。コーヒーよりも軽く、ハイビスカスやタマリンドに似た風味で近年注目されています。',
   7);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (5, 'バリスタ世界大会（WBC）で競われる主な内容は？',
   '豆の栽培技術', '焙煎機の操作', 'コーヒー農園の管理', 'エスプレッソ・ミルクドリンク・シグネチャードリンクの調整と表現力',
   3,
   'ワールドバリスタチャンピオンシップ（WBC）では、エスプレッソ・カプチーノ・シグネチャードリンクの各4杯を規定時間内に作り、味・技術・説明力・創造性で審査されます。',
   8);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (5, 'コーヒーの「テロワール」とは？',
   '焙煎機の種類', 'カッピングスコアの項目名', 'コーヒーに含まれるミネラル', '産地の土壌・気候・標高・微生物など栽培環境の総体',
   3,
   'テロワールはワイン用語が転用されたもので、コーヒーが育つ土壌・気候・標高・水質・日照・微生物環境など、産地固有の自然条件の総体を指します。同じ品種でも産地によって風味が大きく異なるのはテロワールの違いです。',
   9);

INSERT INTO questions (level_id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation, sort_order) VALUES
  (5, 'SCAフレーバーホイールで使われる語彙の分類は？',
   '甘い・辛い・しょっぱいの3分類のみ', '産地別に分類されている', '焙煎度別に分類されている', 'フルーティー・フローラル・ナッティ・チョコレートなどの階層分類',
   3,
   'SCAフレーバーホイールは2016年に改訂され、コーヒーのフレーバーをフルーティー・フローラル・グリーン・ナッティ・チョコレート・スパイシーなどの大分類と、より具体的なサブカテゴリで構造化しています。',
   10);
