export default {
	lang: 						"Kra–Dai",
	
	MSG_REPLY_ADMIN: "ผู้ดูแลระบบ",
	MSG_REPLY_GUEST: "ID ผู้ใช้: 🙂{uid}",
	MSG_BET_TOTAL: "ยอดเดิมพันทั้งหมดในรอบนี้: 💰{total}💰",
	MSG_BANK: "จัดการบัญชีเรียกเก็บเงิน",
	MSG_BALANCE: "ยอดเงินในบัญชีของคุณยังคงมี 💰{balance}💰",
	MSG_SET_BANK: "ตั้งค่าบัญชีรับยอดสำเร็จ",

	MSG_GAME_RULE: `1. กฎขนาดเดิมพันคี่และคู่:
	เล็ก: คำสั่งเดิมพันคือ: เล็ก/จำนวน เช่น ต่ำ/100 หมายความว่าผู้ใช้ตั้งใจที่จะเดิมพันสูงด้วย 100  กฎการชนะ: ผลรวมของลูกเต๋าสามลูกคือ: 4, 5, 6, 7, 8, 9, 10 โบนัสคือ 2 เท่า หากจับหมายเลขเสือดาว (เท่ากัน 3 ลูกเต๋า) ผู้ใช้จะแพ้เกมนี้ .
	สูง: คำสั่งเดิมพันคือ: สูง/จำนวน ถ้าสูง/100 หมายถึงผู้ใช้ตั้งใจที่จะใช้ 100 เพื่อเดิมพันต่ำ  กฎการชนะ: ผลรวมของลูกเต๋าสามลูกคือ: 11, 12, 13, 14, 15, 16, 17 โบนัสคือ 2 เท่า หากจับหมายเลขเสือดาว (ลูกเต๋า 3 ลูกเหมือนกัน) ผู้ใช้จะแพ้เกมนี้
	Order: คำสั่งเดิมพันคือ: Order/Amount ถ้า Order/100 หมายความว่าผู้ใช้ตั้งใจที่จะใช้ 100 เพื่อเดิมพันในคำสั่ง  กฎการชนะ: ผลรวมของลูกเต๋าสามลูกเป็นลูกเต๋าเดียว: 5, 7, 9, 11, 13, 15, 17 โบนัสเป็นสองเท่า หากจับหมายเลขเสือดาว (ลูกเต๋า 3 ลูกเหมือนกัน) ผู้ใช้จะแพ้เกมนี้
	Double: คำสั่งเดิมพันคือ: Double/Amount ถ้า Double/100 หมายถึงผู้ใช้ตั้งใจที่จะเดิมพันในสองเท่าด้วย 100  กฎการชนะ: ผลรวมของลูกเต๋าสามลูกเป็นสองเท่า: 4, 6, 8, 10, 12, 14, 16 โบนัสเป็นสองเท่า หากจับหมายเลขเสือดาว (ลูกเต๋า 3 ลูกเหมือนกัน) ผู้ใช้จะแพ้เกมนี้
   
	2. กดหมายเลขเดียว:
	คำสั่งเดิมพันคือ: ตัวเลข/จำนวน เช่น 2/100 ตัวเลขต้องอยู่ระหว่าง 1-6 และจำนวนเงินเดิมพันไม่ควรเกินยอดคงเหลือของผู้ใช้
	กฎการชนะ: หากมีการเดิมพันตัวเลขโดยผู้ใช้ในผลของลูกเต๋าสามลูก ผู้ใช้จะได้รับรางวัลเป็นสองเท่า  มีสองหมายเลขที่ผู้ใช้เดิมพันและผู้ใช้ได้รับรางวัล 3 เท่า  หากมีเลขเดิมพัน 3 ตัว ผู้ใช้จะได้รับรางวัล 4 เท่า
	ตัวอย่างเช่น ถ้าตัวเลขคือ 234 ผู้ใช้จะได้รับ 200 หากเป็น 224 ผู้ใช้จะได้รับ 300 หากเป็น 222 ผู้ใช้จะได้รับ 400
	3. กดเลขคู่:
	คำสั่งเดิมพันคือ: ตัวเลข/จำนวน เช่น 23/100 ตัวเลขต้องอยู่ระหว่าง 1-6 และจำนวนเงินเดิมพันไม่ควรเกินยอดผู้ใช้
	กฎการชนะ: หากผลสองในสามของลูกเต๋าเหมือนกับตัวเลขที่เดิมพันโดยผู้ใช้  จากนั้นผู้ใช้จะได้รับรางวัล 6 เท่า
	ตัวอย่างเช่น หมายเลขที่ออกมาคือ 234 จากนั้นผู้ใช้จะได้รับรางวัล 600
	4 ขนาดของเลขคี่และคู่ +
	ลำดับการเดิมพันคือ: เช่นสูง 3/100, 3 สูง/100, ต่ำ 3/100, 3 ต่ำ/100, เดี่ยว 2/100, คู่ 6/100
	กฎการชนะ: หากผลรวมของลูกเต๋าที่สุ่มออกมามีขนาดสูง และหนึ่งในสามหมายเลขของลูกเต๋ามีค่าเท่ากับหมายเลขเดิมพันของผู้ใช้
	ตัวคูณโบนัส: หากผลรวมที่จับได้คือ 17 และมี 3 ในนั้น ลูกค้าจะได้รับโบนัส 3.3 เท่า
	5. ดูประวัติย้อนหลัง 10 รายการดล่าสุด /N
	6. ตรวจสอบบัตรธนาคารที่เติมเงิน: /Y
	7. ยกเลิกเดิมพันทั้งหมด: /X
	8. ตรวจสอบยอดเงิน: /C
   
	คำสั่งผู้ดูแลระบบ:
	/start : เริ่มเดิมพัน
	/B : หยุดเดิมพัน
	/D จำนวน ID ผู้ใช้: เติมเงิน
	/S หมายเลข: ดูผล
	/set หมายเลขบัตรธนาคาร: ตั้งหมายเลขบัตรธนาคาร`,

	MSG_NOT_STARTED: 				'การพนันยังไม่เริ่มต้น โปรดป้อน /start เพื่อเริ่ม ',
	MSG_STARTED: 					'🚩{roundId} รอบ การเดิมพันเริ่มต้นขึ้น ',
	MSG_STOPPED: 					'🚩{roundId} รอบ หยุดเดิมพัน โปรดไปที่ Douyin ถ่ายทอดสดเพื่อดูการจับสลากสด ',

	MSG_CANCEL_BET: 				'เดิมพันของคุณถูกยกเลิก', // Your bet has been cancelled,
	MSG_DEPOSIT_SUCCESS: 			'ฝากเงิน {amount} สำเร็จ ',
	MSG_WITHDRAW_SUCCESS: 			'ถอน {amount} สำเร็จแล้ว  ',
	MSG_RESULT: 					'ผลลอตเตอรีรอบ {roundId}',

	ERROR_UNKNOWN_COMMAND: 			'คำสั่งไม่ถูกต้อง',
	ERROR_UNKNOWN_ERROR: 			'ข้อผิดพลาดที่ไม่รู้จัก',
	ERROR_INVALID_PARAM: 			'พารามิเตอร์ไม่ถูกต้อง',
	ERROR_NOT_EXISTS_USER: 			'ไม่มีผู้ใช้อยู่ ',
	ERROR_NOT_BETTED: 				"คุณยังไม่ได้วางเดิมพัน",
	ERROR_BET_BALANCE: 				"❌ยอดคงเหลือไม่เพียงพอ โปรดติดต่อฝ่ายจัดการเพื่อเติมเงิน❌",
	ERROR_ALREADY_STARTED: 			"🚩{roundId} การเดิมพันเริ่มต้นขึ้นแล้ว",
	ERROR_ALREADY_STOPPED: 			"🚩{roundId} การเดิมพันหยุดลงแล้ว",
	ERROR_GROUP_COMMAND: 			"คำสั่งนี้ใช้ได้เฉพาะในกลุ่มเท่านั้น",
	ERROR_NO_RESULT: 				"ไม่มีประวัติการเดิมพัน",
}