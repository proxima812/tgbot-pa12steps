const quotes = [
	"Три пути ведут к знанию: путь размышления — это путь самый благородный, путь подражания — это путь самый легкий и путь опыта — это путь самый горький.",
	"Даже в обществе двух человек я непременно найду, чему у них поучиться. Достоинствам их я постараюсь подражать, а на их недостатках сам буду учиться.",
	"Если ты ненавидишь – значит тебя победили.",
	"Только самые мудрые и самые глупые не поддаются обучению.",
	"В стране, где есть порядок, будь смел и в действиях, и в речах. В стране, где нет порядка, будь смел в действиях, но осмотрителен в речах.",
	"Тот, кто, обращаясь к старому, способен открывать новое, достоин быть учителем.",
	"Перед тем как мстить, вырой две могилы.",
	"Тот, кто не может наставить к добру своих домашних, не может учиться сам.",
	"Давай наставления только тому, кто ищет знаний, обнаружив свое невежество.",
	"Учиться и, когда придет время, прикладывать усвоенное к делу — разве это не прекрасно!",
	// Остальные цитаты добавлены аналогичным образом
	"Счастье — это когда тебя понимают, большое счастье — это когда тебя любят, настоящее счастье — это когда любишь ты.",
	"Нелегко встретить человека, который, отдав учению три года жизни, не мечтал бы занять высокий пост.",
	"В пятнадцать лет я обратил свои помыслы к учебе. В тридцать лет я обрел самостоятельность. В сорок лет я избавился от сомнений. В пятьдесят лет я познал волю неба. В шестьдесят лет я научился отличать правду от неправды. В семьдесят лет я стал следовать желаниям своего сердца.",
	"Несдержанность в мелочах погубит великое дело.",
	"Забывайте обиды. Но никогда не забывайте доброту.",
	"Лишь когда приходят холода, становится ясно, что сосны и кипарисы последними теряют свой убор.",
	"Счастливого человека очень просто узнать. Он словно излучает ауру спокойствия и тепла, движется неторопливо, но везде успевает, говорит спокойно, но его все понимают. Секрет счастливых людей прост — это отсутствие напряжения.",
	"Люди в древности не любили много говорить. Они считали позором для себя не поспеть за собственными словами.",
	"Если вы хотите добиться успеха, избегайте шести пороков: сонливости, лени, страха, гнева, праздности и нерешительности.",
	"Советы мы принимаем каплями, зато раздаём ведрами.",
	"Там, где кончается терпение, начинается выносливость.",
	"Драгоценный камень нельзя отполировать без трения. Также и человек не может стать успешным без достаточного количества трудных попыток.",
	"Остерегайтесь тех, кто хочет вменить вам чувство вины, ибо они жаждут власти над вами.",
	"Благородный человек предъявляет требования к себе, низкий человек предъявляет требования к другим.",
	"Иногда стоит совершить ошибку, хотя бы ради того, чтобы знать почему ее не следовало совершать.",
	"Побороть дурные привычки можно только сегодня, а не завтра.",
	"Человек, находящийся на самой вершине горы не упал туда с неба.",
	"Три вещи никогда не возвращаются обратно – время, слово, возможность. Поэтому: не теряй времени, выбирай слова, не упускай возможность.",
	"Уважать всякого человека, как самого себя, и поступать с ним, как мы желаем, чтобы с нами поступали, — выше этого нет ничего.",
	"Выберите себе работу по душе, и вам не придется работать ни одного дня в своей жизни.",
	"Если у тебя не будет дурных мыслей, не будет и дурных поступков.",
	"Я не огорчаюсь, если люди меня не понимают, — огорчаюсь, если я не понимаю людей.",
	"Достойный человек не идет по следам других людей.",
	"Попытайтесь быть хотя бы немного добрее, и вы увидите, что будете не в состоянии совершить дурной поступок.",
	"Посещать и слушать злых людей — это уже начало злого дела.",
	"В древности люди учились для того, чтобы совершенствовать себя. Нынче учатся для того, чтобы удивить других.",
	"Молчание — великий друг, который никогда не изменит.",
	"Можно всю жизнь проклинать темноту, а можно зажечь маленькую свечку.",
	"Благородный муж винит себя, малый человек винит других.",
	"Пришло несчастье – человек породил его, пришло счастье – человек его вырастил.",
	"Сердитый человек всегда полон яда.",
	"Красота есть во всем, но не всем дано это видеть.",
	"Почтительный сын — это тот, кто огорчает отца и мать разве что своей болезнью.",
	"Благородный в душе безмятежен. Низкий человек всегда озабочен.",
	"Только истинно человечный человек способен и любить, и ненавидеть.",
	"Если тебе плюют в спину, значит ты впереди.",
	"Благородный человек знает только долг, низкий человек знает только выгоду.",
	"Не тот велик, кто никогда не падал, а тот велик – кто падал и вставал.",
	"Плати за зло чистосердечием, а за добро плати добром.",
	"Если в человеке естество затмит воспитанность, получится дикарь, а если воспитанность затмит естество, получится знаток писаний. Лишь тот, в ком естество и воспитанность пребывают в равновесии, может считаться достойным мужем.",
	"Посылать людей на войну необученными — значит предавать их.",
	"Как мы можем знать, что такое смерть, когда мы не знаем еще, что такое жизнь?",
	"Оценивая мирские дела, благородный муж ничего не отвергает и не одобряет, а все меряет справедливостью.",
	"Мудрый человек не делает другим того, чего он не желает, чтобы ему сделали.",
	"Управляйте народом с достоинством, и люди будут почтительны.",
	"Относитесь к народу по-доброму, и люди будут трудиться с усердием.",
	"Возвышайте добродетельных и наставляйте неученых, и люди будут доверять вам.",
	"Не поговорить с человеком, который достоин разговора, значит потерять человека. А говорить с человеком, который разговора не достоин, — значит терять слова. Мудрый не теряет ни людей, ни слов.",
	"Порой мы видим многое, но не замечаем главного.",
	"Мудрец стыдится своих недостатков, но не стыдится исправить их.",
	"Я не понимаю, как можно иметь дело с человеком, которому нельзя доверять? Если в повозке нет оси, как можно на ней ездить?",
	"Не имей друзей, которые уступали бы тебе в моральном отношении.",
	"Учитесь так, словно вы постоянно ощущаете нехватку своих знаний, и так, словно вы постоянно боитесь растерять свои знания.",
	"Если человек тверд, решителен, прост и несловоохотлив, то он уже близок к человечности.",
	"Когда, совершив ошибку, не исправил ее, это и называется совершить ошибку.",
	"Прекрасно там, где пребывает милосердие. Разве достичь мудрости, если не жить в его краях?",
	"Учение без размышления бесполезно, но и размышление без учения опасно.",
	"Когда пути неодинаковы, не составляют вместе планов.",
	"Не тот велик, кто никогда не падал, а тот велик — кто падал и вставал.",
	"К молодым людям нельзя относиться свысока. Очень может быть, что, повзрослев, они станут выдающимися мужами. Только тот, кто ничего не достиг, дожив до сорока или пятидесяти лет, не заслуживает уважения.",
	"На самом деле, жизнь проста, но мы настойчиво её усложняем.",
	"Стужа отцу с матерью, увещевайте их как можно мягче. Если ваши советы не возымеют действия, будьте по-прежнему почтительны и смиренны. Даже если вы раздосадованы в душе, не высказывайте своего недовольства.",
	"Счастье — это когда тебя понимают, большое счастье — это когда тебя любят, настоящее счастье — это когда любишь ты.",
	"Того, кто не задумывается о далеких трудностях, непременно поджидают близкие неприятности.",
	"Люди хотят для себя богатства и славы; если то и другое нельзя обрести честно, следует их избегать.",
	"Неважно, как медленно вы идете, до тех пор, пока вы не остановитесь.",
	"Когда исходят лишь из выгоды, то множат злобу.",
	"Никогда не заводите дружбу с человеком, который не лучше вас самих.",
	"Если сам прям, то всё исполнят и без приказания. А если сам не прям, то слушаться не будут, даже если им прикажут.",
	"Когда ты разгневан, думай о последствиях.",
	"Если будешь чрезмерно усерден на службе, потеряешь расположение государя. Если будешь чрезмерно радушен в дружбе, потеряешь расположение друзей.",
	"Если очевидно, что цели не могут быть достигнуты, не корректируйте цели, корректируйте действия.",
	"Благородный муж знает о своем превосходстве, но избегает соперничества. Он ладит со всеми, но ни с кем не вступает в сговор.",
	"Чем бы вы ни занимались в жизни, делайте это всем своим сердцем.",
	"Утром познав истину, вечером можно умереть.",
	"Наблюдайте за поведением человека, вникайте в причины его поступков, приглядывайтесь к нему в часы досуга. Останется ли он тогда для вас загадкой?",
	"Красивые речи вредят морали. Когда нет желания заниматься малыми делами, это вредит большим замыслам.",
	"Благородные люди живут в согласии с другими людьми, но не следуют за другими людьми, низкие следуют за другими людьми, но не живут с ними в согласии.",
	"Кто полон милосердия, непременно обладает мужеством.",
	"Блажен тот, кто ничего не знает: он не рискует быть непонятым.",
	"Когда ясно, в чем заключается нравственность, то и все остальное будет ясно.",
	"Будучи вне дома, держите себя так, словно вы принимаете почетных гостей. Пользуясь услугами людей, ведите себя так, словно совершаете торжественный обряд. Не делайте другим того, чего себе не пожелаете. Тогда ни в государстве, ни в семье не будет недовольства.",
	"Птица выбирает дерево. Как же дерево может выбрать птицу?",
	"Мы доверяем своим глазам — но им нельзя верить; мы полагаемся на свое сердце — но и на него не стоит полагаться. Запомните же, ученики: поистине нелегко познать человека!",
	"Мудрый не знает волнений, человечный не знает забот, смелый не знает страха.",
	"При встрече с достойным человеком думай о том, как сравняться с ним. Встречаясь с низким человеком, присматривайтесь к самому себе и сам себя суди.",
	"Благородный муж прям и тверд, но не упрям.",
	"Когда не знаешь слов, нечем познавать людей.",
]

module.exports = quotes
