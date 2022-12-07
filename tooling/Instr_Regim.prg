PUBLIC direction, roughness, cur_kte, cur_chist, d_max, H1, cur_id_mat, kod_instr, name_instr, obozn_instr, P_tc, M_tc, F_mx, F_mz, V, F, Ar, X_max, X_min, hardness
PUBLIC  H_kan, B_kan, L_obr, d_nach, D_rezb, P_pezb, ugol_rezb, KOD_REZB 


m.X_max=0
m.X_min=0 
m.d_max=0
m.H_kan=0
m.B_kan=0
m.L_obr=0
m.d_nach=0
m.D_rezb=0.0
m.P_pezb=0.0
m.ugol_rezb=0 
m.KOD_REZB=1

m.H1=0
m.cur_id_mat=0
m.kod_instr=0
m.name_instr=""
m.obozn_instr=""
m.hardness=0
m.direction="R"
m.roughness=6.3

 m.V=0
 m.F=0.0
 m.Ar=0.0

*��������� ������
 m.P_tc = 3.7
 m.M_tc = 30.0
 m.F_mx = 4000
 m.F_mz = 6000

if !used ("PRIORITET")
   use  PRIORITET IN 0 exclu
endif

if !used ("METAL")
   use  METAL IN 0 exclu
ENDIF


if !used ("Cutters")
   use  Cutters IN 0 exclu
ENDIF


if !used ("TURN_1")
   use  TURN_1 IN 0 exclu
ENDIF

if !used ("K_mpa")
   use  K_mpa IN 0 exclu
ENDIF


if !used ("K_hrc")
   use  K_hrc IN 0 exclu
ENDIF


if !used ("R_shift")
   use  R_shift IN 0 exclu
ENDIF

if !used ("GROOVE")
   use  GROOVE IN 0 exclu
ENDIF

if !used ("Boring_1")
   use  Boring_1 IN 0 exclu
ENDIF

if !used ("DRILLING")
   use  DRILLING IN 0 exclu
ENDIF

if !used ("SPLAV")
   use  SPLAV IN 0 exclu
ENDIF

if !used ("INTGROOVE")
   use  INTGROOVE IN 0 exclu
ENDIF

if !used ("V_rezb")
   use  V_rezb IN 0 exclu
ENDIF

if !used ("N_metr")
   use  N_metr IN 0 exclu
ENDIF

if !used ("N_TPI")
   use  N_TPI IN 0 exclu
ENDIF

* ������ �������� �����	

IF FILE('instr_input.txt')  && Does file exist? 
   gnErrFile = FOPEN('instr_input.txt',12)     && If so, open read-write
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� ������� ����' WINDOW NOWAIT
ELSE  &&  
   m.input_inst_info= Fread(gnErrFile , 100)
ENDIF
=FCLOSE(gnErrFile )     && Close file

  	
* MESSAGEBOX(m.input_inst_info,0,"������ �� �������� �����  instr_input.txt ")	
	
FOR ii=1 TO 15 STEP 1
   DO case
       CASE  ii=1
         npred=0
         n= AT(",",m.input_inst_info,1) 
         L=n-npred-1       
         n1=1
         m.cur_kte=VAL(SUBSTR(m.input_inst_info,n1,L)) 
         npred=n 	                          
       CASE  ii=2
         n= AT(",",m.input_inst_info,2)  
         L=n-npred-1      
         n1=n-L
         m.cur_chist=VAL(SUBSTR(m.input_inst_info,n1,L))
         npred=n   
       CASE  ii=3
         n= AT(",",m.input_inst_info,3)  
         L=n-npred-1      
         n1=n-L
         m.cur_id_mat=VAL(SUBSTR(m.input_inst_info,n1,L)) 
         npred=n   
       CASE  ii=4
         n= AT(",",m.input_inst_info,4)  
         L=n-npred-1      
         n1=n-L
        m.hardness=VAL(SUBSTR(m.input_inst_info,n1,L)) 
         npred=n   
       CASE  ii=5
         n= AT(",",m.input_inst_info,5)  
         L=n-npred-1      
         n1=n-L
        m.X_max=VAL(SUBSTR(m.input_inst_info,n1,L)) 
         npred=n   
       CASE  ii=6
         n= AT(",",m.input_inst_info,6)  
         L=n-npred-1      
         n1=n-L
        m.X_min=VAL(SUBSTR(m.input_inst_info,n1,L)) 
         npred=n   
       CASE  ii=7
         n= AT(",",m.input_inst_info,7)  
         L=n-npred-1      
         n1=n-L
         m.H_kan=VAL(SUBSTR(m.input_inst_info,n1,L)) 
         npred=n    		                		                     		             		      		    
       CASE  ii=8
         n= AT(",",m.input_inst_info,8)  
         L=n-npred-1      
         n1=n-L
         m.B_kan=VAL(SUBSTR(m.input_inst_info,n1,L)) 
         npred=n    	
       CASE  ii=9
         n= AT(",",m.input_inst_info,9)  
         L=n-npred-1      
         n1=n-L
         m.d_nach=VAL(SUBSTR(m.input_inst_info,n1,L)) 
         npred=n 
       CASE  ii=10
         n= AT(",",m.input_inst_info,10)  
         L=n-npred-1      
         n1=n-L
         m.L_obr=VAL(SUBSTR(m.input_inst_info,n1,L)) 
         npred=n 
       CASE  ii=11
         n= AT(",",m.input_inst_info,11)  
         L=n-npred-1      
         n1=n-L
         m.KOD_REZB=VAL(SUBSTR(m.input_inst_info,n1,L)) 
         npred=n 
       CASE  ii=12
         n= AT(",",m.input_inst_info,12)  
         L=n-npred-1      
         n1=n-L
         m.P_pezb=VAL(SUBSTR(m.input_inst_info,n1,L)) 
         npred=n 
       CASE  ii=13
         n= AT(",",m.input_inst_info,13)  
         L=n-npred-1      
         n1=n-L
         m.ugol_rezb=VAL(SUBSTR(m.input_inst_info,n1,L)) 
         npred=n 
       CASE  ii=14
         n= AT(",",m.input_inst_info,14)  
         L=n-npred-1      
         n1=n-L
         m.roughness=VAL(SUBSTR(m.input_inst_info,n1,L)) 
         npred=n 
       CASE  ii=15
         L=1      
         n1=npred+1
         m.direction=SUBSTR(m.input_inst_info,n1,L)           
     endcase  

ENDFOR 

* ��������

IF m.cur_kte=0
   MESSAGEBOX("�� ������ ���",0," ")
  return  
endif


IF m.cur_id_mat=0
   MESSAGEBOX("�� ������ ��������",0," ")
  return  
endif

IF m.cur_chist=1 AND  EMPTY(m.roughness)
   MESSAGEBOX("�� ������� �������������",0," ")
  return  
endif


IF m.cur_chist=0 AND  m.X_max=0
   MESSAGEBOX("�� ������ X_max ���������",0," ")
  return  
endif





DO CASE
   CASE m.cur_kte=1 AND m.cur_chist=0
         DO kte_var1
   CASE m.cur_kte=1 AND m.cur_chist=1 
        DO kte_var1_1
   CASE m.cur_kte=2 AND m.cur_chist=0 
        DO kte_var2
   CASE m.cur_kte=2 AND m.cur_chist=1 
        DO kte_var2_2  
   CASE m.cur_kte=3 AND m.cur_chist=0 
        DO kte_var3 
   CASE m.cur_kte=3 AND m.cur_chist=1 
       DO kte_var3_1   
   CASE m.cur_kte=4 AND m.cur_chist=0 
       DO kte_var4
   CASE m.cur_kte=5 AND m.cur_chist=0 
       DO kte_var4_1
   CASE m.cur_kte=5 AND m.cur_chist=1 
       DO kte_var5 
   CASE m.cur_kte=6 AND m.cur_chist=0 
       DO kte_var6 
   CASE m.cur_kte=6 AND m.cur_chist=1 
       DO kte_var6_1
   CASE m.cur_kte=7 AND m.cur_chist=0 
        DO kte_var7 
   CASE m.cur_kte=8 AND m.cur_chist=0 
        DO kte_var8 
   CASE m.cur_kte=8 AND m.cur_chist=1 
        DO kte_var8_1 
   CASE m.cur_kte=9 AND m.cur_chist=0 
        DO kte_var9 
   CASE m.cur_kte=9 AND m.cur_chist=1 
       DO kte_var9_1 
   CASE m.cur_kte=10 AND m.cur_chist=0 
       DO kte_var10 
   CASE m.cur_kte=10 AND m.cur_chist=1 
       DO kte_var10_1 
   CASE m.cur_kte=11 AND m.cur_chist=0 
       DO kte_var11 
   CASE m.cur_kte=12 AND m.cur_chist=0 
       DO kte_var12 
   CASE m.cur_kte=12 AND m.cur_chist=1 
       DO kte_var12_1
   CASE m.cur_kte=13 AND m.cur_chist=0 
       DO kte_var13 
   CASE m.cur_kte=13 AND m.cur_chist=1 
        DO kte_var13_1
   CASE m.cur_kte=14 AND m.cur_chist=0 
       DO kte_var14 
   CASE m.cur_kte=15 AND m.cur_chist=0 
       DO kte_var15
   CASE m.cur_kte=16 AND m.cur_chist=0 
       DO kte_var16 


   OTHERWISE MESSAGEBOX("������� ��� ������� �� ���������",0," ")
ENDCASE


QUIT

*****************************************************

PROCEDURE kte_var1

* MESSAGEBOX("����� �������� ",0," ")

* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		          m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc)and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND direct= m.direction  INTO TABLE rezc_tmp ORDER BY prior
		    n=_tally
		    SELECT rezc_tmp

		    IF n>=1   
		     m.kod_instr=rezc_tmp.instr_id
            
   		    SELECT rezc_tmp 
   		    GO top
   		    SCATTER memvar
	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn
           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_

   		    DO case
   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
    		           m.splav_ok=1  		             
   		             
   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
   		               m.splav_ok=1 
   		                		             
   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
   		               m.splav_ok=1  		             
   		            
   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
   		               m.splav_ok=1  		             
   		                		          
   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
   		               m.splav_ok=1  		              		             		      		    
   		    endcase       
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     

		    endif

		endif 
endfor	

IF  m.instr_OK=.T.
	* ������ ������� �������
	m.Ar_max = m.ArMax   &&&  �� �������� ��������
	m.ar_prip= 2.0  && ��� ��������� ����� ������� ������ 2 �� 
	m.ar_obr=m.X_max/20   &&& �� ��������

	m.ar_rasc=m.Ar_max
	IF m.ar_prip < m.ar_rasc
	    m.ar_rasc=m.ar_prip
	ENDIF

	IF m.ar_obr < m.ar_rasc
	    m.ar_rasc=m.ar_obr
	ENDIF

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))


	SELECT * from TURN_1 WHERE UPPER(smg)= m.SMG_met  AND ar <= m.ar_rasc  INTO CURSOR regim_ order BY ar desc, f desc

	SELECT regim_ 
	n1=_tally
	GO top

	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 

 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    V_tabl=INT(V_tabl*m.kmpa)
	endif
endif


	* �������� �� �������� � ������� �������
	   m.min_f=0
	   m.kc=Cur_metal_.kc

	   P_rasc = (m.ar_rasc*F_tabl*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	IF P_rasc > m.P_tc
	   m.ar_rasc= (60*1000*0.85*m.P_tc)/(F_tabl*V_tabl*m.kc)
	   
	*   ������������  �� 0.5, 1, 1.5, 2, 2.5, 3
	 
	 rrr=IIF(m.ar_rasc<1.0,0.5,IIF(m.ar_rasc<1.5,1.0,IIF(m.ar_rasc<2.0,1.5,IIF(m.ar_rasc<2.5,2.0,IIF(m.ar_rasc<3.0,2.5,3)))))
	  
	 m.ar_rasc=rrr	  
	    
	endif

	* �������� �� ��������� �������
	  
	   m_rasc = (m.ar_rasc*F_tabl*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc
	   

	   IF  m_rasc >m.M_tc
	      m.f2=  F_tabl * m.M_tc/m_rasc
	      m.f2=ROUND(m.f2,3)
	   ELSE
	     m.f2=F_tabl    
	   ENDIF  

	*�������� �� ������ �����
	 m.F_mx = 4000
	 m.F_mz = 6000
	 
	 m.F_rasc = m.ar_rasc*f2*m.kc*0.35
*	  thisform.text9.Value= m.F_rasc
	   
	 IF  m.F_rasc > m.F_mx
	 
	  m.f2= m.f2*( m.F_mx / m.F_rasc)
	 
	 ENDIF
	 
	 
	 m.V=V_tabl
	 m.F=m.f2
	 m.Ar=m.ar_rasc
	 
	 
	 P_rasc = (m.ar*F2*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	   m_rasc = (m.ar*F2*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc

* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file
  	
* MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	
	
ELSE
     MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF
	

ENDPROC 




PROCEDURE kte_var1_1

* MESSAGEBOX("����� �������� ",0," ")


* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		          m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc)and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND direct= m.direction  INTO TABLE rezc_tmp ORDER BY prior
		    n=_tally
		    SELECT rezc_tmp

		    
		    IF n>=1   
		     m.kod_instr=rezc_tmp.instr_id
            
   		    SELECT rezc_tmp 
   		    GO top
   		    SCATTER memvar
	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn
           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_

   		    
   		    DO case
   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
    		           m.splav_ok=1  		             
   		             
   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
   		               m.splav_ok=1 
   		                		             
   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
   		               m.splav_ok=1  		             
   		            
   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
   		               m.splav_ok=1  		             
   		                		          
   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
   		               m.splav_ok=1  		             
   		             		      		    
   		    endcase       
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     

		    endif

		endif 
	
endfor	

IF  m.instr_OK=.T.

	* ������ ������� �������
	m.ar_rasc=0.5

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))


	SELECT * from TURN_1 WHERE UPPER(smg)= m.SMG_met  AND ar <= m.ar_rasc  INTO CURSOR regim_ order BY ar asc, f asc

	SELECT regim_ 
	n1=_tally
	GO top


	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 

* ����� ������ �� ������� ����������

m.rrr=VAL(m.roughness)

SELECT * from R_shift WHERE ra<=m.rrr AND r = m.re  INTO CURSOR fff_  order BY ra desc
	
	
	SELECT fff_

  IF m.F_tabl > fff_.f
	 m.F_tabl= fff_.f
  endif	

 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    m.V_tabl=INT(m.V_tabl*m.kmpa)
	endif

endif

	 
	 m.V=m.V_tabl
	 m.F=m.F_tabl
	 m.Ar=m.ar_rasc

m.kc=Cur_metal_.kc	 
	 
	 P_rasc = (m.ar*m.F*m.V*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	   m_rasc = (m.ar*F*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc

* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file

  	
 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	
	
	
ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF
	

ENDPROC 





PROCEDURE kte_var2

* MESSAGEBOX("�������� ���� ��������  �������� ",0," ")

* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		          m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc)and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND direct= m.direction  INTO TABLE rezc_tmp ORDER BY prior
		    n=_tally
		    SELECT rezc_tmp
		    
		    IF n>=1   
		     m.kod_instr=rezc_tmp.instr_id
            
   		    SELECT rezc_tmp 
   		    GO top
   		    SCATTER memvar
	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn
           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_
   		    
   		    DO case
   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
    		           m.splav_ok=1  		             
   		             
   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
   		               m.splav_ok=1 
   		                		             
   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
   		               m.splav_ok=1  		             
   		            
   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
   		               m.splav_ok=1  		             
   		                		          
   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
   		               m.splav_ok=1  		             
   		             		      		    
   		    endcase       
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     
		    endif

		endif 
	
endfor	

IF  m.instr_OK=.T.

	* ������ ������� �������
	m.Ar_max = m.ArMax   &&&  �� �������� ��������
	m.ar_prip= m.X_max-m.X_min  &&&  �� ��������
	m.ar_obr=m.X_max/20   &&& �� ��������

	m.ar_rasc=m.Ar_max
	IF m.ar_prip < m.ar_rasc
	    m.ar_rasc=m.ar_prip
	ENDIF

	IF m.ar_obr < m.ar_rasc
	    m.ar_rasc=m.ar_obr
	ENDIF

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))


	SELECT * from TURN_1 WHERE UPPER(smg)= m.SMG_met  AND ar <= m.ar_rasc  INTO CURSOR regim_ order BY ar desc, f desc

	SELECT regim_ 
	n1=_tally
	GO top

	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 


 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    V_tabl=INT(V_tabl*m.kmpa)
	endif

endif


	* �������� �� �������� � ������� �������
	   m.min_f=0
	   m.kc=Cur_metal_.kc

	   P_rasc = (m.ar_rasc*F_tabl*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	IF P_rasc > m.P_tc
	   m.ar_rasc= (60*1000*0.85*m.P_tc)/(F_tabl*V_tabl*m.kc)
	   
	*   ������������  �� 0.5, 1, 1.5, 2, 2.5, 3
	 
	 rrr=IIF(m.ar_rasc<1.0,0.5,IIF(m.ar_rasc<1.5,1.0,IIF(m.ar_rasc<2.0,1.5,IIF(m.ar_rasc<2.5,2.0,IIF(m.ar_rasc<3.0,2.5,3)))))
	  
	 m.ar_rasc=rrr
	      
	endif

	* �������� �� ��������� �������
	  
	   m_rasc = (m.ar_rasc*F_tabl*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc
	   

	   IF  m_rasc >m.M_tc
	      m.f2= F_tabl * m.M_tc/m_rasc
	      m.f2=ROUND(m.f2,3)
	   ELSE
	     m.f2=F_tabl    
	   ENDIF  

	*�������� �� ������ ����� 
	 m.F_rasc = m.ar_rasc*f2*m.kc*0.35
*	  thisform.text9.Value= m.F_rasc
	   
	 IF  m.F_rasc > m.F_mx	 
	     m.f2= m.f2*( m.F_mx / m.F_rasc)
	 ENDIF
	 
	 
	 m.V=V_tabl
	 m.F=m.f2
	 m.Ar=m.ar_rasc
	 
	 
	 P_rasc = (m.ar*F2*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	   m_rasc = (m.ar*F2*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc

* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file
  	
 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	

ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF
	
ENDPROC 
  




PROCEDURE kte_var2_1

* MESSAGEBOX("�������� ���� �������� �������� ",0," ")


* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		          m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc)and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND direct= m.direction  INTO TABLE rezc_tmp ORDER BY prior
		    n=_tally
		    SELECT rezc_tmp
		    
		    IF n>=1   
		     m.kod_instr=rezc_tmp.instr_id
            
   		    SELECT rezc_tmp 
   		    GO top
   		    SCATTER memvar
	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn
           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_
   		    
   		    DO case
   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
    		           m.splav_ok=1  		             
   		             
   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
   		               m.splav_ok=1 
   		                		             
   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
   		               m.splav_ok=1  		             
   		            
   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
   		               m.splav_ok=1  		             
   		                		          
   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
   		               m.splav_ok=1  		             
   		             		      		    
   		    endcase       
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     
		    endif

		endif 
	
endfor	

IF  m.instr_OK=.T.

	* ������ ������� �������
	m.ar_rasc=0.5

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))
	SELECT * from TURN_1 WHERE UPPER(smg)= m.SMG_met  AND ar <= m.ar_rasc  INTO CURSOR regim_ order BY ar asc, f asc

	SELECT regim_ 
	n1=_tally
	GO top

	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 

* ����� ������ �� ������� ����������

m.rrr=VAL(m.roughness)

SELECT * from R_shift WHERE ra<=m.rrr AND r = m.re  INTO CURSOR fff_  order BY ra desc
	
	
	SELECT fff_

  IF m.F_tabl > fff_.f
	 m.F_tabl= fff_.f
  endif	


 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    m.V_tabl=INT(m.V_tabl*m.kmpa)
	endif
endif

	 m.V=m.V_tabl
	 m.F=m.F_tabl
	 m.Ar=m.ar_rasc

m.kc=Cur_metal_.kc	 
	 
	 P_rasc = (m.ar*m.F*m.V*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	   m_rasc = (m.ar*F*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc


* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file
  	
 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	

ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF
	

ENDPROC  



  
PROCEDURE kte_var3 

* MESSAGEBOX("������������ ���� ��������  �������� ",0," ")


* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		          m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc)and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND direct= m.direction  INTO TABLE rezc_tmp ORDER BY prior
		    n=_tally
		    SELECT rezc_tmp
		    
		    IF n>=1   
		     m.kod_instr=rezc_tmp.instr_id
            
   		    SELECT rezc_tmp 
   		    GO top
   		    SCATTER memvar
	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn
           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_
   		    
   		    DO case
   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
    		           m.splav_ok=1  		             
   		             
   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
   		               m.splav_ok=1 
   		                		             
   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
   		               m.splav_ok=1  		             
   		            
   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
   		               m.splav_ok=1  		             
   		                		          
   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
   		               m.splav_ok=1  		             
   		             		      		    
   		    endcase       
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     

		    endif

		endif 
	
endfor	

IF  m.instr_OK=.T.

	* ������ ������� �������
	m.Ar_max = m.ArMax   &&&  �� �������� ��������
	m.ar_prip= m.X_max-m.X_min  &&&  �� ��������
	m.ar_obr=m.X_max/20   &&& �� ��������

	m.ar_rasc=m.Ar_max
	IF m.ar_prip < m.ar_rasc
	    m.ar_rasc=m.ar_prip
	ENDIF

	IF m.ar_obr < m.ar_rasc
	    m.ar_rasc=m.ar_obr
	ENDIF

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))


	SELECT * from TURN_1 WHERE UPPER(smg)= m.SMG_met  AND ar <= m.ar_rasc  INTO CURSOR regim_ order BY ar desc, f desc

	SELECT regim_ 
	n1=_tally
	GO top

	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 

 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    V_tabl=INT(V_tabl*m.kmpa)
	endif

endif


	* �������� �� �������� � ������� �������
	   m.min_f=0
	   m.kc=Cur_metal_.kc

	   P_rasc = (m.ar_rasc*F_tabl*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	IF P_rasc > m.P_tc
	   m.ar_rasc= (60*1000*0.85*m.P_tc)/(F_tabl*V_tabl*m.kc)
	   
	*   ������������  �� 0.5, 1, 1.5, 2, 2.5, 3
	 
	 rrr=IIF(m.ar_rasc<1.0,0.5,IIF(m.ar_rasc<1.5,1.0,IIF(m.ar_rasc<2.0,1.5,IIF(m.ar_rasc<2.5,2.0,IIF(m.ar_rasc<3.0,2.5,3)))))
	  
	 m.ar_rasc=rrr
	endif

	* �������� �� ��������� �������
	  
	   m_rasc = (m.ar_rasc*F_tabl*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc
	   

	   IF  m_rasc >m.M_tc
	      m.f2= F_tabl * m.M_tc/m_rasc
	      m.f2=ROUND(m.f2,3)
	   ELSE
	     m.f2=F_tabl    
	   ENDIF  

	*�������� �� ������ �����

	 m.F_rasc = m.ar_rasc*f2*m.kc*0.35
*	  thisform.text9.Value= m.F_rasc
	   
	 IF  m.F_rasc > m.F_mx	 
    	  m.f2= m.f2*( m.F_mx / m.F_rasc)
	 ENDIF
	 

	 m.V=V_tabl
	 m.F=m.f2
	 m.Ar=m.ar_rasc
	 
	 
	 P_rasc = (m.ar*F2*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	   m_rasc = (m.ar*F2*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc


* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  
IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file
  	
 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	
		
ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF
	

ENDPROC  




PROCEDURE kte_var3_1 

* MESSAGEBOX("������������ ���� �������� �������� ",0," ")

 
* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		          m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc)and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND direct= m.direction  INTO TABLE rezc_tmp ORDER BY prior
		    n=_tally
		    SELECT rezc_tmp
		    
		    IF n>=1   
		     m.kod_instr=rezc_tmp.instr_id
            
   		    SELECT rezc_tmp 
   		    GO top
   		    SCATTER memvar
	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn
           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_
   		    
   		    DO case
   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
    		           m.splav_ok=1  		             
   		             
   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
   		               m.splav_ok=1 
   		                		             
   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
   		               m.splav_ok=1  		             
   		            
   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
   		               m.splav_ok=1  		             
   		                		          
   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
   		               m.splav_ok=1  		             
   		             		      		    
   		    endcase       
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     
		    endif

		endif 
	
endfor	

IF  m.instr_OK=.T.

	* ������ ������� �������
	m.ar_rasc=0.5

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))


	SELECT * from TURN_1 WHERE UPPER(smg)= m.SMG_met  AND ar <= m.ar_rasc  INTO CURSOR regim_ order BY ar asc, f asc

	SELECT regim_ 
	n1=_tally
	GO top
	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 

* ����� ������ �� ������� ����������

m.rrr=VAL(m.roughness)

SELECT * from R_shift WHERE ra<=m.rrr AND r = m.re  INTO CURSOR fff_  order BY ra desc
	
	
	SELECT fff_
  IF m.F_tabl > fff_.f
	 m.F_tabl= fff_.f
  endif	


 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    m.V_tabl=INT(m.V_tabl*m.kmpa)
	endif

endif

 
	 m.V=m.V_tabl
	 m.F=m.F_tabl
	 m.Ar=m.ar_rasc

m.kc=Cur_metal_.kc	 
	 
	 P_rasc = (m.ar*m.F*m.V*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	   m_rasc = (m.ar*F*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc


* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file

  	
 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	
	 
	
ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF
	

ENDPROC  



PROCEDURE kte_var4
 
* MESSAGEBOX("������� �������� �������� ",0," ")

* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		           m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc) and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc AND CW<=m.B_kan AND cdx >= m.H_kan INTO TABLE rezc_tmp ORDER BY prior, cw 
		    n=_tally
		    SELECT rezc_tmp

		    IF n>=1   
          
   		    SELECT rezc_tmp 
   		    GO top
    		  SCATTER memvar
 	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn

           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_
   		    
	   		    DO case
	   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
	    		           m.splav_ok=1  		             
	   		             
	   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
	   		               m.splav_ok=1 
	   		                		             
	   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
	   		               m.splav_ok=1  		             
	   		            
	   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
	   		               m.splav_ok=1  		             
	   		                		          
	   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
	   		               m.splav_ok=1  		               		             		      		    
	   		    endcase 
	   		          
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     
		    endif

		endif 
	
endfor	

		   IF  m.instr_OK=.f.   &&& ���� ����� �� ������
			     SELECT * from Cutters WHERE  CW<=m.B_kan  INTO CURSOR rrr_ 
			       n=_tally
			     IF n=0
			           MESSAGEBOX(" ��� ����������� �� ����� ������ ��������� ������, ��� ������ ������� ",0," ")		                  
	             ENDIF
             
			     SELECT * from Cutters WHERE   cdx >= m.H_kan INTO CURSOR rrr_              
			       n=_tally
			     IF n=0
			           MESSAGEBOX(" ��� ����������� �� ����� ����� ��������� ������, ��� ������� ������� ",0," ")		                  
	             ENDIF		     
            endif




IF  m.instr_OK=.T.

	* ������ ������� �������
 	m.ar_rasc = rezc_tmp.cw  &&&  �� �������� ��������

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))


	SELECT * from GROOVE WHERE UPPER(smg)= m.SMG_met  AND cw = m.ar_rasc  INTO CURSOR regim_ 
	n=_tally

    IF n>=1
	SELECT regim_ 
	GO top

	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 
	
	else
       MESSAGEBOX("� ��  ��� ������ �� ������� ��� ������ �������� �������� + ������ ���� ",0," ")	
    endif


 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    V_tabl=INT(V_tabl*m.kmpa)
	endif

endif


	* �������� �� �������� � ������� �������
	   m.min_f=0
	   m.kc=Cur_metal_.kc

	   P_rasc = (m.ar_rasc*F_tabl*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	IF P_rasc > m.P_tc
	   m.F_tabl= (60*1000*0.85*m.P_tc)/(m.ar_rasc*V_tabl*m.kc) 
	   m.F_tabl= ROUND(m.F_tabl,2)
	endif

	* �������� �� ��������� �������
	  
	   m_rasc = (m.ar_rasc*F_tabl*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc
	   

	   IF  m_rasc >m.M_tc
	      m.f2= F_tabl * m.M_tc/m_rasc
	      m.f2= ROUND(m.F2,2)
	   ELSE
	     m.f2=F_tabl    
	   ENDIF  

	*�������� �� ������ �����
	 
	 m.F_rasc = m.ar_rasc*f2*m.kc*0.35
*	  thisform.text9.Value= m.F_rasc
	   
	 IF  m.F_rasc > m.F_mx 
	    m.f2= m.f2*( m.F_mx / m.F_rasc)	 
	 ENDIF
	 
	 
	 m.V=V_tabl
	 m.F=m.f2
	 m.Ar=m.ar_rasc
	 
	 P_rasc = (m.ar*F2*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	   m_rasc = (m.ar*F2*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc

* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file
  	
 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	

ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF
	

ENDPROC     





PROCEDURE kte_var5
 
 * MESSAGEBOX("������� �1 �������� �������� ",0," ")


* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		           m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc) and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND direct= m.direction AND tip=m.Kd_gr_rezc AND WF<=m.B_kan AND LH >= m.H_kan INTO TABLE rezc_tmp ORDER BY prior, LH, WF 
		    n=_tally
		    SELECT rezc_tmp
		    
		    IF n>=1   
          
   		    SELECT rezc_tmp 
   		    GO top
    		  SCATTER memvar
 	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn

           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_
   		    
	   		    DO case
	   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
	    		           m.splav_ok=1  		             
	   		             
	   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
	   		               m.splav_ok=1 
	   		                		             
	   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
	   		               m.splav_ok=1  		             
	   		            
	   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
	   		               m.splav_ok=1  		             
	   		                		          
	   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
	   		               m.splav_ok=1  		               		             		      		    
	   		    endcase 
	   		          
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     
		    endif

		endif 
	
endfor	



IF  m.instr_OK=.T.

	* ������ ������� �������
	m.Ar_max = m.ArMax   &&&  �� �������� ��������
	m.ar_prip= m.X_max-m.X_min  &&&  �� ��������
	m.ar_obr=m.X_max/20   &&& �� ��������

	m.ar_rasc=m.Ar_max
	IF m.ar_prip < m.ar_rasc
	    m.ar_rasc=m.ar_prip
	ENDIF

	IF m.ar_obr < m.ar_rasc
	    m.ar_rasc=m.ar_obr
	ENDIF

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))


	SELECT * from TURN_1 WHERE UPPER(smg)= m.SMG_met  AND ar <= m.ar_rasc  INTO CURSOR regim_ order BY ar desc, f desc

	n=_tally

    IF n>=1
	SELECT regim_ 
	GO top

	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 
	
	else
       MESSAGEBOX("� ��  ��� ������ �� ������� ��� ������ �������� �������� + ������ ���� ",0," ")	
    endif 

 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    V_tabl=INT(V_tabl*m.kmpa)
	endif

endif


	* �������� �� �������� � ������� �������
	   m.min_f=0
	   m.kc=Cur_metal_.kc

	   P_rasc = (m.ar_rasc*F_tabl*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	IF P_rasc > m.P_tc
	   m.F_tabl= (60*1000*0.85*m.P_tc)/(m.ar_rasc*V_tabl*m.kc) 
	   m.F_tabl= ROUND(m.F_tabl,2)
	endif

	* �������� �� ��������� �������
	  
	   m_rasc = (m.ar_rasc*F_tabl*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc
	   

	   IF  m_rasc >m.M_tc
	      m.f2= F_tabl * m.M_tc/m_rasc
	      m.f2= ROUND(m.F2,2)
	   ELSE
	     m.f2=F_tabl    
	   ENDIF  

	*�������� �� ������ �����
	 m.F_rasc = m.ar_rasc*f2*m.kc*0.35
*	  thisform.text9.Value= m.F_rasc
	   
	 IF  m.F_rasc > m.F_mx
	 
	  m.f2= m.f2*( m.F_mx / m.F_rasc)
	 
	 ENDIF
	 
	 m.V=V_tabl
	 m.F=m.f2
	 m.Ar=m.ar_rasc
	 
	 
	 P_rasc = (m.ar*F2*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	   m_rasc = (m.ar*F2*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc


* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file
  	
 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	
	
ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF


ENDPROC  


PROCEDURE kte_var5_1
 
* MESSAGEBOX("������� �1 �������� �������� ",0," ")


* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		          m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc)and  m.instr_OK=.f.
	  	    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND direct= m.direction AND tip=m.Kd_gr_rezc AND WF<=m.B_kan AND LH >= m.H_kan INTO TABLE rezc_tmp ORDER BY prior, LH, WF 
		    n=_tally
		    SELECT rezc_tmp
		    
		    IF n>=1   
		     m.kod_instr=rezc_tmp.instr_id
            
   		    SELECT rezc_tmp 
   		    GO top
   		    SCATTER memvar
	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn
           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_
   		    
   		    DO case
   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
    		           m.splav_ok=1  		             
   		             
   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
   		               m.splav_ok=1 
   		                		             
   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
   		               m.splav_ok=1  		             
   		            
   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
   		               m.splav_ok=1  		             
   		                		          
   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
   		               m.splav_ok=1  		             
   		             		      		    
   		    endcase       
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     
		    endif

		endif 
	
endfor	

IF  m.instr_OK=.T.

	* ������ ������� �������
	m.ar_rasc=0.5

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))


	SELECT * from TURN_1 WHERE UPPER(smg)= m.SMG_met  AND ar <= m.ar_rasc  INTO CURSOR regim_ order BY ar asc, f asc

	SELECT regim_ 
	n1=_tally
	GO top

	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 

* ����� ������ �� ������� ����������

m.rrr=VAL(m.roughness)

SELECT * from R_shift WHERE ra<=m.rrr AND r = m.re  INTO CURSOR fff_  order BY ra desc
	
	
	SELECT fff_

	IF m.F_tabl > fff_.f
	    m.F_tabl= fff_.f
    endif	
	

 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    m.V_tabl=INT(m.V_tabl*m.kmpa)
	endif

endif

	 
	 m.V=m.V_tabl
	 m.F=m.F_tabl
	 m.Ar=m.ar_rasc

m.kc=Cur_metal_.kc	 
	 
	 P_rasc = (m.ar*m.F*m.V*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	   m_rasc = (m.ar*F*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc

* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file
 	
 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	
	
ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF
	

ENDPROC  
      

PROCEDURE kte_var6
 
* MESSAGEBOX("������� ����� �������� �������� ",0," ")

* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		           m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc) and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc AND CW<=m.B_kan AND cdx >= m.H_kan INTO TABLE rezc_tmp ORDER BY prior, cw desc
		    n=_tally
		    SELECT rezc_tmp
		    
		    IF n>=1   
          
   		    SELECT rezc_tmp 
   		    GO top
    		  SCATTER memvar
 	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn

           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_
   		    
	   		    DO case
	   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
	    		           m.splav_ok=1  		             
	   		             
	   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
	   		               m.splav_ok=1 
	   		                		             
	   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
	   		               m.splav_ok=1  		             
	   		            
	   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
	   		               m.splav_ok=1  		             
	   		                		          
	   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
	   		               m.splav_ok=1  		               		             		      		    
	   		    endcase 
	   		          
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     
		    endif

		endif 
	
endfor	

		   IF  m.instr_OK=.f.   &&& ���� ����� �� ������

			     SELECT * from Cutters WHERE   cdx >= m.H_kan  AND Daxx=0 AND Daxn=0INTO CURSOR rrr_              
			       n=_tally
			     IF n=0
			           MESSAGEBOX(" ��� ����������� �� ����� ����� ��������� ������, ��� ������� ������� ",0," ")		                  
	             ENDIF		     
            endif




IF  m.instr_OK=.T.

	* ������ ������� �������
 	m.ar_rasc = rezc_tmp.cw  &&&  �� �������� ��������

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))

	SELECT * from GROOVE WHERE UPPER(smg)= m.SMG_met  AND cw >= m.ar_rasc  INTO CURSOR regim_  order BY cw 
	n=_tally

    IF n>=1
	SELECT regim_ 
	GO top

	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 
	
	else
       MESSAGEBOX("� ��  ��� ������ �� ������� ��� ������ �������� �������� + ������ ���� ",0," ")	
    endif


 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    V_tabl=INT(V_tabl*m.kmpa)
	endif

endif


	* �������� �� �������� � ������� �������
	   m.min_f=0
	   m.kc=Cur_metal_.kc

	   P_rasc = (m.ar_rasc*F_tabl*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	IF P_rasc > m.P_tc
	   m.F_tabl= (60*1000*0.85*m.P_tc)/(m.ar_rasc*V_tabl*m.kc) 
	   m.F_tabl= ROUND(m.F_tabl,2)
	endif

	* �������� �� ��������� �������
	  
	   m_rasc = (m.ar_rasc*F_tabl*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc
	   

	   IF  m_rasc >m.M_tc
	      m.f2= F_tabl * m.M_tc/m_rasc
	      m.f2= ROUND(m.F2,2)
	   ELSE
	     m.f2=F_tabl    
	   ENDIF  

	*�������� �� ������ �����

	 
	 m.F_rasc = m.ar_rasc*f2*m.kc*0.35
*	  thisform.text9.Value= m.F_rasc
	   
	 IF  m.F_rasc > m.F_mx
	 
	  m.f2= m.f2*( m.F_mx / m.F_rasc)
	 
	 ENDIF

 
	 m.V=V_tabl
	 m.F=m.f2
	 m.Ar=m.ar_rasc
	 
	 
	 P_rasc = (m.ar*F2*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	   m_rasc = (m.ar*F2*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc


* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file

 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	

ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF
	

ENDPROC  


PROCEDURE kte_var6_1
 
* MESSAGEBOX("������� ���������  ����� ",0," ")

* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		           m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc) and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc AND CW<=m.B_kan AND cdx >= m.H_kan INTO TABLE rezc_tmp ORDER BY prior, cw desc
		    n=_tally
		    SELECT rezc_tmp

		    IF n>=1   
          
   		    SELECT rezc_tmp 
   		    GO top
   		    
    		  SCATTER memvar
 	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn

           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_
   		    
	   		    DO case
	   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
	    		           m.splav_ok=1  		             
	   		             
	   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
	   		               m.splav_ok=1 
	   		                		             
	   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
	   		               m.splav_ok=1  		             
	   		            
	   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
	   		               m.splav_ok=1  		             
	   		                		          
	   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
	   		               m.splav_ok=1  		               		             		      		    
	   		    endcase 
	   		          
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     

		    endif

		endif 
	
endfor	

		   IF  m.instr_OK=.f.   &&& ���� ����� �� ������
           
			     SELECT * from Cutters WHERE   cdx >= m.H_kan AND Daxx-0 AND Daxn=0 INTO CURSOR rrr_              
			       n=_tally
			     IF n=0
			           MESSAGEBOX(" ��� ����������� �� ����� ����� ��������� ������, ��� ������� ������� ",0," ")		                  
	             ENDIF		     
            endif




IF  m.instr_OK=.T.

	* ������ ������� �������
 	m.ar_rasc = 0.5

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))


	SELECT * from GROOVE WHERE UPPER(smg)= m.SMG_met  AND cw >= m.ar_rasc  INTO CURSOR regim_ 
	n=_tally

    IF n>=1
	SELECT regim_ 
	GO top

	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 
	
	else
       MESSAGEBOX("� ��  ��� ������ �� ������� ��� ������ �������� �������� + ������ ���� ",0," ")	
    endif
	
	* ����� ������ �� ������� ����������

m.rrr=VAL(m.roughness)

SELECT * from R_shift WHERE ra<=m.rrr AND r = m.re  INTO CURSOR fff_  order BY ra desc
	
	
	SELECT fff_

	IF m.F_tabl > fff_.f
	    m.F_tabl= fff_.f
    endif	


 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    V_tabl=INT(V_tabl*m.kmpa)
	endif

endif


	     m.f2=F_tabl    

	 m.V=V_tabl
	 m.F=m.f2
	 m.Ar=m.ar_rasc
	m.kc=Cur_metal_.kc	  
	 
	 P_rasc = (m.ar*F2*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	   m_rasc = (m.ar*F2*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc

* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file

  	
 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	

ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF
	


ENDPROC 

     
PROCEDURE kte_var7
 
* MESSAGEBOX("������� ���������� �������� ",0," ")

* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		           m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc) and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc AND CW<=m.B_kan AND cdx >= m.H_kan AND DAXN < m.X_min AND DAXX > m.X_max INTO TABLE rezc_tmp ORDER BY prior, cw, DAXX, DAXN 
		    n=_tally
		    SELECT rezc_tmp

		    IF n>=1   
          
   		    SELECT rezc_tmp 
   		    GO top
   		    
    		  SCATTER memvar
 	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn
             
           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_
  		    
	   		    DO case
	   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
	    		           m.splav_ok=1  		             
	   		             
	   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
	   		               m.splav_ok=1 
	   		                		             
	   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
	   		               m.splav_ok=1  		             
	   		            
	   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
	   		               m.splav_ok=1  		             
	   		                		          
	   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
	   		               m.splav_ok=1  		               		             		      		    
	   		    endcase 
	   		          
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     

		    endif

		endif 
	
endfor	

		   IF  m.instr_OK=.f.   &&& ���� ����� �� ������
			     SELECT * from Cutters WHERE  CW<=m.B_kan AND Daxx>0 AND Daxn>0 INTO CURSOR rrr_ 
			       n=_tally
			     IF n=0
			           MESSAGEBOX(" ��� ����������� �� ����� ������ ��������� ������, ��� ������ ������� ",0," ")		                  
	             ENDIF
             
			     SELECT * from Cutters WHERE   cdx >= m.H_kan AND Daxx>0 AND Daxn>0 INTO CURSOR rrr_              
			       n=_tally
			     IF n=0
			           MESSAGEBOX(" ��� ����������� �� ����� ����� ��������� ������, ��� ������� ������� ",0," ")		                  
	             ENDIF		     
            endif




IF  m.instr_OK=.T.

	* ������ ������� �������
 	m.ar_rasc = rezc_tmp.cw  &&&  �� �������� ��������

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))


	SELECT * from GROOVE WHERE UPPER(smg)= m.SMG_met  AND cw >= m.ar_rasc  INTO CURSOR regim_ 
	n=_tally

    IF n>=1
	SELECT regim_ 
	GO top



	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 
	
	else
       MESSAGEBOX("� ��  ��� ������ �� ������� ��� ������ �������� �������� + ������ ���� ",0," ")	
    endif


 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    V_tabl=INT(V_tabl*m.kmpa)
	endif

endif


	* �������� �� �������� � ������� �������
	   m.min_f=0
	   m.kc=Cur_metal_.kc

	   P_rasc = (m.ar_rasc*F_tabl*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	IF P_rasc > m.P_tc
	   m.F_tabl= (60*1000*0.85*m.P_tc)/(m.ar_rasc*V_tabl*m.kc) 
*	   m.F_tabl= ROUND(m.F_tabl,2)
	endif

	* �������� �� ��������� �������
	  
	   m_rasc = (m.ar_rasc*F_tabl*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc
	   

	   IF  m_rasc >m.M_tc
	      m.f2= F_tabl * m.M_tc/m_rasc
	      m.f2= ROUND(m.F2,2)
	   ELSE
	     m.f2=F_tabl    
	   ENDIF  

	*�������� �� ������ �����
	 m.F_rasc = m.ar_rasc*f2*m.kc*0.35
*	  thisform.text9.Value= m.F_rasc
	   
	 IF  m.F_rasc > m.F_mx
	 
	  m.f2= m.f2*( m.F_mx / m.F_rasc)
	 
	 ENDIF
	 
	 m.V=V_tabl
	 m.F=m.f2
	 m.Ar=m.ar_rasc
	 
	 
	 P_rasc = (m.ar*F2*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	   m_rasc = (m.ar*F2*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc


* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file
  	
 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	

ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF
	

ENDPROC 


 
PROCEDURE kte_var8
 
* MESSAGEBOX("������� ����������   �������� ",0," ")

* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		           m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc) and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc AND CW<=m.B_kan AND cdx >= m.H_kan AND DAXN < m.X_min AND DAXX > m.X_max INTO TABLE rezc_tmp ORDER BY prior, cw, DAXX, DAXN 
		    n=_tally
		    SELECT rezc_tmp
		    
		    IF n>=1   
          
   		    SELECT rezc_tmp 
   		    GO top
   		    
    		  SCATTER memvar
 	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn
             
  
           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_
   		    
	   		    DO case
	   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
	    		           m.splav_ok=1  		             
	   		             
	   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
	   		               m.splav_ok=1 
	   		                		             
	   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
	   		               m.splav_ok=1  		             
	   		            
	   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
	   		               m.splav_ok=1  		             
	   		                		          
	   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
	   		               m.splav_ok=1  		               		             		      		    
	   		    endcase 
	   		          
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     

		    endif

		endif 
	
endfor	

		   IF  m.instr_OK=.f.   &&& ���� ����� �� ������
			     SELECT * from Cutters WHERE  CW<=m.B_kan AND Daxx>0 AND Daxn>0 INTO CURSOR rrr_ 
			       n=_tally
			     IF n=0
			           MESSAGEBOX(" ��� ����������� �� ����� ������ ��������� ������, ��� ������ ������� ",0," ")		                  
	             ENDIF
             
			     SELECT * from Cutters WHERE   cdx >= m.H_kan AND Daxx>0 AND Daxn>0 INTO CURSOR rrr_              
			       n=_tally
			     IF n=0
			           MESSAGEBOX(" ��� ����������� �� ����� ����� ��������� ������, ��� ������� ������� ",0," ")		                  
	             ENDIF		     
            endif

IF  m.instr_OK=.T.

	* ������ ������� �������
 	m.ar_rasc = rezc_tmp.cw  &&&  �� �������� ��������

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))


	SELECT * from GROOVE WHERE UPPER(smg)= m.SMG_met  AND cw >= m.ar_rasc  INTO CURSOR regim_ 
	n=_tally

    IF n>=1
	SELECT regim_ 
	GO top

	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 
	
	else
       MESSAGEBOX("� ��  ��� ������ �� ������� ��� ������ �������� �������� + ������ ���� ",0," ")	
    endif


 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    V_tabl=INT(V_tabl*m.kmpa)
	endif

endif


	* �������� �� �������� � ������� �������
	   m.min_f=0
	   m.kc=Cur_metal_.kc

	   P_rasc = (m.ar_rasc*F_tabl*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	IF P_rasc > m.P_tc
	   m.F_tabl= (60*1000*0.85*m.P_tc)/(m.ar_rasc*V_tabl*m.kc) 
	   m.F_tabl= ROUND(m.F_tabl,2)
	endif

	* �������� �� ��������� �������
	  
	   m_rasc = (m.ar_rasc*F_tabl*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc
	   

	   IF  m_rasc >m.M_tc
	      m.f2= F_tabl * m.M_tc/m_rasc
	      m.f2= ROUND(m.F2,2)
	   ELSE
	     m.f2=F_tabl    
	   ENDIF  

	*�������� �� ������ �����
	 
	 m.F_rasc = m.ar_rasc*f2*m.kc*0.35
*	  thisform.text9.Value= m.F_rasc
	   
	 IF  m.F_rasc > m.F_mx
	 
	    m.f2= m.f2*( m.F_mx / m.F_rasc)
	 
	 ENDIF
	 
	 
	 m.V=V_tabl
	 m.F=m.f2
	 m.Ar=m.ar_rasc
	 
	 
	 P_rasc = (m.ar*F2*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	   m_rasc = (m.ar*F2*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc

* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file
  	
 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	

ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF
	


ENDPROC 
        

PROCEDURE kte_var8_1
 
* MESSAGEBOX("������� ����������  ����� ",0," ")


* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		           m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc) and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc AND CW<=m.B_kan AND cdx >= m.H_kan AND DAXN < m.X_min AND DAXX > m.X_max INTO TABLE rezc_tmp ORDER BY prior, cw, DAXX, DAXN 
		    n=_tally
		    SELECT rezc_tmp
		    
		    IF n>=1   
          
   		    SELECT rezc_tmp 
   		    GO top
   		    
    		  SCATTER memvar
 	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn
             
  
           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_
   		    
	   		    DO case
	   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
	    		           m.splav_ok=1  		             
	   		             
	   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
	   		               m.splav_ok=1 
	   		                		             
	   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
	   		               m.splav_ok=1  		             
	   		            
	   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
	   		               m.splav_ok=1  		             
	   		                		          
	   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
	   		               m.splav_ok=1  		               		             		      		    
	   		    endcase 
	   		          
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     
		    endif

		endif 
	
endfor	

		   IF  m.instr_OK=.f.   &&& ���� ����� �� ������
			     SELECT * from Cutters WHERE  CW<=m.B_kan AND Daxx>0 AND Daxn>0 INTO CURSOR rrr_ 
			       n=_tally
			     IF n=0
			           MESSAGEBOX(" ��� ����������� �� ����� ������ ��������� ������, ��� ������ ������� ",0," ")		                  
	             ENDIF
             
			     SELECT * from Cutters WHERE   cdx >= m.H_kan AND Daxx>0 AND Daxn>0 INTO CURSOR rrr_              
			       n=_tally
			     IF n=0
			           MESSAGEBOX(" ��� ����������� �� ����� ����� ��������� ������, ��� ������� ������� ",0," ")		                  
	             ENDIF		     
            endif

IF  m.instr_OK=.T.

	* ������ ������� �������
 	m.ar_rasc = 0.5

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))


	SELECT * from GROOVE WHERE UPPER(smg)= m.SMG_met  AND cw >= m.ar_rasc  INTO CURSOR regim_ 
	n=_tally

    IF n>=1
	SELECT regim_ 
	GO top

	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 
	
	else
       MESSAGEBOX("� ��  ��� ������ �� ������� ��� ������ �������� �������� + ������ ���� ",0," ")	
    endif
	
	* ����� ������ �� ������� ����������

  m.rrr=VAL(m.roughness)

  SELECT * from R_shift WHERE ra<=m.rrr AND r = m.re  INTO CURSOR fff_  order BY ra desc
	
	
	SELECT fff_
	IF m.F_tabl > fff_.f
	    m.F_tabl= fff_.f
    endif	

 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    V_tabl=INT(V_tabl*m.kmpa)
	endif

endif

     m.f2=F_tabl    


	 m.V=V_tabl
	 m.F=m.f2
	 m.Ar=m.ar_rasc
	m.kc=Cur_metal_.kc	  
	 
	 P_rasc = (m.ar*F2*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	   m_rasc = (m.ar*F2*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc


* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file
  	
 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	
	
ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF
	

ENDPROC 
        
 

PROCEDURE kte_var9
 
* MESSAGEBOX("��������� ������  �������   ",0," ")

* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		          m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc)and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND direct= m.direction AND dcinn<=m.d_nach AND vilet>=m.L_obr INTO TABLE rezc_tmp ORDER BY prior
		    n=_tally
		    SELECT rezc_tmp
		    
		    IF n>=1   
   		    SELECT rezc_tmp 
   		    GO top
   		    SCATTER memvar
	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn
           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_
   		    
   		    DO case
   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
    		           m.splav_ok=1  		             
   		             
   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
   		               m.splav_ok=1 
   		                		             
   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
   		               m.splav_ok=1  		             
   		            
   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
   		               m.splav_ok=1  		             
   		                		          
   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
   		               m.splav_ok=1  		             
   		             		      		    
   		    endcase       
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     
		    endif

		endif 
	
endfor	


IF  m.instr_OK=.T.

	* ������ ������� �������
	m.Ar_max = m.ArMax   &&&  �� �������� ��������
	m.ar_prip= m.X_max-m.X_min  &&&  �� ��������
	m.ar_rasc=m.Ar_max
	IF m.ar_prip < m.ar_rasc
	    m.ar_rasc=m.ar_prip
	ENDIF


	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))

	SELECT * from boring_1 WHERE UPPER(smg)= m.SMG_met  AND ar <= m.ar_rasc  INTO CURSOR regim_ order BY ar desc, f desc

	SELECT regim_ 
	n1=_tally
	GO top
	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 


 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    V_tabl=INT(V_tabl*m.kmpa)
	endif

endif


	* �������� �� �������� � ������� �������
	   m.min_f=0
	   m.kc=Cur_metal_.kc

	   P_rasc = (m.ar_rasc*F_tabl*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	IF P_rasc > m.P_tc
	   m.ar_rasc= (60*1000*0.85*m.P_tc)/(F_tabl*V_tabl*m.kc)
	   
	*   ������������  �� 0.5, 1, 1.5, 2, 2.5, 3
	 
	 rrr=IIF(m.ar_rasc<1.0,0.5,IIF(m.ar_rasc<1.5,1.0,IIF(m.ar_rasc<2.0,1.5,IIF(m.ar_rasc<2.5,2.0,IIF(m.ar_rasc<3.0,2.5,3)))))
	  
	 m.ar_rasc=rrr
	endif

	* �������� �� ��������� �������
	  
	   m_rasc = (m.ar_rasc*F_tabl*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc
	   

	   IF  m_rasc >m.M_tc
	      m.f2= F_tabl * m.M_tc/m_rasc
	      m.f2=ROUND(m.f2,3)
	   ELSE
	     m.f2=F_tabl    
	   ENDIF  

	*�������� �� ������ �����
	 m.F_mx = 4000
	 m.F_mz = 6000
	 
	 m.F_rasc = m.ar_rasc*f2*m.kc*0.35
*	  thisform.text9.Value= m.F_rasc
	   
	 IF  m.F_rasc > m.F_mx	 
	    m.f2= m.f2*( m.F_mx / m.F_rasc)	 
	 ENDIF

	 m.V=V_tabl
	 m.F=m.f2
	 m.Ar=m.ar_rasc
	 
	 
	 P_rasc = (m.ar*F2*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	   m_rasc = (m.ar*F2*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc

* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file

  	
 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	
	
ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF
	

ENDPROC 




PROCEDURE kte_var9_1
 
* MESSAGEBOX("��������� ������  �����   ",0," ")


* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		          m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc)and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND direct= m.direction AND dcinn<=m.d_nach AND vilet>=m.L_obr INTO TABLE rezc_tmp ORDER BY prior
		    n=_tally
		    SELECT rezc_tmp
		    
		    IF n>=1   
		     m.kod_instr=rezc_tmp.instr_id
            
   		    SELECT rezc_tmp 
   		    GO top
   		    SCATTER memvar
	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn
           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_

   		    DO case
   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
    		           m.splav_ok=1  		             
   		             
   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
   		               m.splav_ok=1 
   		                		             
   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
   		               m.splav_ok=1  		             
   		            
   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
   		               m.splav_ok=1  		             
   		                		          
   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
   		               m.splav_ok=1  		             
   		             		      		    
   		    endcase       
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     
		    endif

		endif 
	
endfor	

IF  m.instr_OK=.T.

	* ������ ������� �������
	m.ar_rasc=0.5

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))


	SELECT * from boring_1 WHERE UPPER(smg)= m.SMG_met  AND ar <= m.ar_rasc  INTO CURSOR regim_ order BY ar desc, f desc
	
	SELECT regim_ 
	n1=_tally
	GO top

	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 

* ����� ������ �� ������� ����������

m.rrr=VAL(m.roughness)

SELECT * from R_shift WHERE ra<=m.rrr AND r = m.re  INTO CURSOR fff_  order BY ra desc
	
	
	SELECT fff_
	IF fff_.f<m.F_tabl   &&& ���� ������ �� ������������� ������ ��� ���������, �� ��������� ���������
	     m.F_tabl= fff_.f
	endif


 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa
	
	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    m.V_tabl=INT(m.V_tabl*m.kmpa)
	endif
endif

	 
	 m.V=m.V_tabl
	 m.F=m.F_tabl
	 m.Ar=m.ar_rasc

m.kc=Cur_metal_.kc	 
	 
	 P_rasc = (m.ar*m.F*m.V*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	   m_rasc = (m.ar*F*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc


* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file
 	
 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	
	 
ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF
	

ENDPROC 



   
PROCEDURE kte_var10
 
* MESSAGEBOX("������������  ����� �������� ",0," ")

* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		          m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc)and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND direct= m.direction AND dcinn<=m.d_nach AND vilet>=m.L_obr INTO TABLE rezc_tmp ORDER BY prior
		    n=_tally
		    SELECT rezc_tmp
		    
		    IF n>=1   
   		    SELECT rezc_tmp 
   		    GO top
   		    SCATTER memvar
	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn
           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_
   		    
   		    DO case
   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
    		           m.splav_ok=1  		             
   		             
   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
   		               m.splav_ok=1 
   		                		             
   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
   		               m.splav_ok=1  		             
   		            
   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
   		               m.splav_ok=1  		             
   		                		          
   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
   		               m.splav_ok=1  		             
   		             		      		    
   		    endcase       
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     

		    endif

		endif 
	
endfor	


IF  m.instr_OK=.T.

	* ������ ������� �������
	m.Ar_max = m.ArMax   &&&  �� �������� ��������
	m.ar_prip= m.X_max-m.X_min  &&&  �� ��������

	m.ar_rasc=m.Ar_max
	IF m.ar_prip < m.ar_rasc
	    m.ar_rasc=m.ar_prip
	ENDIF

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))

	SELECT * from boring_1 WHERE UPPER(smg)= m.SMG_met  AND ar <= m.ar_rasc  INTO CURSOR regim_ order BY ar desc, f desc

	SELECT regim_ 
	n1=_tally
	GO top

	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 


 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    V_tabl=INT(V_tabl*m.kmpa)
	endif
endif


	* �������� �� �������� � ������� �������
	   m.min_f=0
	   m.kc=Cur_metal_.kc

	   P_rasc = (m.ar_rasc*F_tabl*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	IF P_rasc > m.P_tc
	   m.ar_rasc= (60*1000*0.85*m.P_tc)/(F_tabl*V_tabl*m.kc)
	   
	*   ������������  �� 0.5, 1, 1.5, 2, 2.5, 3
	 
	 rrr=IIF(m.ar_rasc<1.0,0.5,IIF(m.ar_rasc<1.5,1.0,IIF(m.ar_rasc<2.0,1.5,IIF(m.ar_rasc<2.5,2.0,IIF(m.ar_rasc<3.0,2.5,3)))))
	  
	 m.ar_rasc=rrr
	  	    
	endif

	* �������� �� ��������� �������
	  
	   m_rasc = (m.ar_rasc*F_tabl*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc
	   

	   IF  m_rasc >m.M_tc
	      m.f2= F_tabl * m.M_tc/m_rasc
	      m.f2=ROUND(m.f2,3)
	   ELSE
	     m.f2=F_tabl    
	   ENDIF  

	*�������� �� ������ �����
	 m.F_rasc = m.ar_rasc*f2*m.kc*0.35
*	  thisform.text9.Value= m.F_rasc
	   
	 IF  m.F_rasc > m.F_mx	 
    	  m.f2= m.f2*( m.F_mx / m.F_rasc) 
	 ENDIF
	 

	 m.V=V_tabl
	 m.F=m.f2
	 m.Ar=m.ar_rasc
	 
	 
	 P_rasc = (m.ar*F2*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	   m_rasc = (m.ar*F2*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc

* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file
  	
 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	
	
ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF
	

ENDPROC  




PROCEDURE kte_var10_1
 
* MESSAGEBOX("������������  ����� ����� ",0," ")

* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		          m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc) and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND direct= m.direction AND dcinn<=m.d_nach AND vilet>=m.L_obr INTO TABLE rezc_tmp ORDER BY prior
		    n=_tally
		    SELECT rezc_tmp
		    
		    IF n>=1   
		     m.kod_instr=rezc_tmp.instr_id
            
   		    SELECT rezc_tmp 
   		    GO top
   		    SCATTER memvar
	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn
           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_
   		    
   		    DO case
   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
    		           m.splav_ok=1  		             
   		             
   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
   		               m.splav_ok=1 
   		                		             
   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
   		               m.splav_ok=1  		             
   		            
   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
   		               m.splav_ok=1  		             
   		                		          
   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
   		               m.splav_ok=1  		             
   		             		      		    
   		    endcase       
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     
		    endif

		endif 
	
endfor	


IF  m.instr_OK=.T.

	* ������ ������� �������
	m.ar_rasc=0.5

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))


	SELECT * from boring_1 WHERE UPPER(smg)= m.SMG_met  AND ar <= m.ar_rasc  INTO CURSOR regim_ order BY ar desc, f desc
	
	SELECT regim_ 
	n1=_tally
	GO top
	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 

* ����� ������ �� ������� ����������

m.rrr=VAL(m.roughness)

SELECT * from R_shift WHERE ra<=m.rrr AND r = m.re  INTO CURSOR fff_  order BY ra desc
	
	SELECT fff_

	IF fff_.f<m.F_tabl   &&& ���� ������ �� ������������� ������ ��� ���������, �� ��������� ���������
	     m.F_tabl= fff_.f
	endif


 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    m.V_tabl=INT(m.V_tabl*m.kmpa)
	endif

endif

	 m.V=m.V_tabl
	 m.F=m.F_tabl
	 m.Ar=m.ar_rasc

m.kc=Cur_metal_.kc	 
	 
	 P_rasc = (m.ar*m.F*m.V*m.kc)/(60*1000*0.85)
*   thisform.text7.Value= P_rasc

	   m_rasc = (m.ar*F*m.kc*m.x_max/1000)
*    thisform.text8.Value= m_rasc


* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file
  	
 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	
	 

ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF
	

ENDPROC  
  

PROCEDURE kte_var11
 
* MESSAGEBOX("������� ����� �������� ",0," ")

* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		           m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc) and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND direct= m.direction AND CW<=m.B_kan AND cdx >= m.H_kan  AND DCINN <= d_nach INTO TABLE rezc_tmp ORDER BY prior, cw desc
		    n=_tally
		    SELECT rezc_tmp

		    IF n>=1   
          
   		    SELECT rezc_tmp 
   		    GO top
    		  SCATTER memvar
 	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn

           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_
   		    
	   		    DO case
	   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
	    		           m.splav_ok=1  		             
	   		             
	   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
	   		               m.splav_ok=1 
	   		                		             
	   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
	   		               m.splav_ok=1  		             
	   		            
	   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
	   		               m.splav_ok=1  		             
	   		                		          
	   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
	   		               m.splav_ok=1  		               		             		      		    
	   		    endcase 
	   		          
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     
		    endif

		endif 
	
endfor	

		   IF  m.instr_OK=.f.   &&& ���� ����� �� ������
			     SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND  direct= m.direction AND CW<=m.B_kan  INTO CURSOR rrr_ 
			       n=_tally
			     IF n=0
			           MESSAGEBOX(" ��� ����������� �� ����� ������ ��������� ������, ��� ������ ������� ",0," ")		                  
	             ENDIF
             
			     SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND  direct= m.direction AND  cdx >= m.H_kan INTO CURSOR rrr_              
			       n=_tally
			     IF n=0
			           MESSAGEBOX(" ��� ����������� �� ����� ����� ��������� ������, ��� ������� ������� ",0," ")		                  
	             ENDIF		     

			     SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND  direct= m.direction AND DCINN <= d_nach INTO CURSOR rrr_              
			       n=_tally
			     IF n=0
			           MESSAGEBOX(" ��� ����������� �� ����� ������� ���������� ��������� ������ ��������� ",0," ")		                  
	             ENDIF		
            endif




IF  m.instr_OK=.T.

	* ������ ������� �������
 	m.ar_rasc = rezc_tmp.cw  &&&  �� �������� ��������

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))


	SELECT * from INTGROOVE WHERE UPPER(smg)= m.SMG_met  AND cw >= m.ar_rasc  INTO CURSOR regim_ order BY cw desc
	n=_tally

    IF n>=1
	SELECT regim_ 
	GO top

	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 
	
	else
       MESSAGEBOX("� ��  ��� ������ �� ������� ��� ������ �������� �������� + ������ ���� ",0," ")	
    endif

 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    V_tabl=INT(V_tabl*m.kmpa)
	endif

endif


	* �������� �� �������� � ������� �������   �� ����������

		   m.kc=Cur_metal_.kc

	     m.f2=F_tabl    
	 
	 m.V=V_tabl
	 m.F=m.f2
	 m.Ar=m.ar_rasc
	 
	 
	 P_rasc = (m.ar*F2*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	   m_rasc = (m.ar*F2*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc



* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file
 	
 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	
	
ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF
	

ENDPROC 


PROCEDURE kte_var12
* MESSAGEBOX("������� �1 ����� �������� ",0," ")


* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		           m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc) and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND direct= m.direction AND lh>=m.L_obr  AND DCINN <= d_nach INTO TABLE rezc_tmp ORDER BY prior
		    n=_tally
		    SELECT rezc_tmp
		    
		    IF n>=1   
          
   		    SELECT rezc_tmp 
   		    GO top
    		  SCATTER memvar
 	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn

           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_
   		    
	   		    DO case
	   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
	    		           m.splav_ok=1  		             
	   		             
	   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
	   		               m.splav_ok=1 
	   		                		             
	   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
	   		               m.splav_ok=1  		             
	   		            
	   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
	   		               m.splav_ok=1  		             
	   		                		          
	   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
	   		               m.splav_ok=1  		               		             		      		    
	   		    endcase 
	   		          
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     

		    endif

		endif 
	
endfor	

		   IF  m.instr_OK=.f.   &&& ���� ����� �� ������
		     SELECT * from Cutters WHERE direct= m.direction AND lh>=m.L_obr  INTO CURSOR rrr_ 
		       n=_tally
		     IF n=0
		           MESSAGEBOX(" ��� ����� �� ����� ����� ��������  ������, ��� �������� ",0," ")		                  
             ENDIF
         
		      SELECT * from Cutters WHERE direct= m.direction AND dcinn >=m.d_nach  INTO CURSOR rrr_             
		       n=_tally
		     IF n>0
		           MESSAGEBOX(" ��� ����� �� ����� ������� ���������� ��������� ��������� ������, ��� �������� ������� ��������� ",0," ")		                  
             ENDIF		     
        endif




IF  m.instr_OK=.T.

		* ������ ������� �������
	m.Ar_max = m.ArMax   &&&  �� �������� ��������
	m.ar_prip= m.X_max-m.X_min  &&&  �� ��������
*	m.ar_obr=m.X_max/20   &&& �� ��������

	m.ar_rasc=m.Ar_max
	IF m.ar_prip < m.ar_rasc
	    m.ar_rasc=m.ar_prip
	ENDIF

*!*		IF m.ar_obr < m.ar_rasc
*!*		    m.ar_rasc=m.ar_obr
*!*		ENDIF

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))


	SELECT * from boring_1 WHERE UPPER(smg)= m.SMG_met  AND ar <= m.ar_rasc  INTO CURSOR regim_ order BY ar desc, f desc

	SELECT regim_ 
	n1=_tally
	GO top

	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 


 IF m.hardness>35   &&& ������������� �� ���������

*   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    V_tabl=INT(V_tabl*m.kmpa)
	endif

endif


	* �������� �� �������� � ������� �������
	   m.min_f=0
	   m.kc=Cur_metal_.kc

	   P_rasc = (m.ar_rasc*F_tabl*V_tabl*m.kc)/(60*1000*0.85)
	   thisform.text7.Value= P_rasc

	IF P_rasc > m.P_tc
	   m.ar_rasc= (60*1000*0.85*m.P_tc)/(F_tabl*V_tabl*m.kc)
	   
	*   ������������  �� 0.5, 1, 1.5, 2, 2.5, 3
	 
	 rrr=IIF(m.ar_rasc<1.0,0.5,IIF(m.ar_rasc<1.5,1.0,IIF(m.ar_rasc<2.0,1.5,IIF(m.ar_rasc<2.5,2.0,IIF(m.ar_rasc<3.0,2.5,3)))))
	  
	 m.ar_rasc=rrr 
	    
	endif

	* �������� �� ��������� �������
	  
	   m_rasc = (m.ar_rasc*F_tabl*m.kc*m.x_max/1000)
	    thisform.text8.Value= m_rasc
	   

	   IF  m_rasc >m.M_tc
	      m.f2= F_tabl * m.M_tc/m_rasc
	      m.f2=ROUND(m.f2,3)
	   ELSE
	     m.f2=F_tabl    
	   ENDIF  

	*�������� �� ������ �����
	 m.F_mx = 4000
	 m.F_mz = 6000
	 
	 m.F_rasc = m.ar_rasc*f2*m.kc*0.35
	  thisform.text9.Value= m.F_rasc
	   
	 IF  m.F_rasc > m.F_mx
	 
	  m.f2= m.f2*( m.F_mx / m.F_rasc)
	 
	 ENDIF
	 

	 
	 m.V=V_tabl
	 m.F=m.f2
	 m.Ar=m.ar_rasc
	 
	 
	 P_rasc = (m.ar*F2*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	   m_rasc = (m.ar*F2*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc

	thisform.Refresh

* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file
 	
* MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	
	
ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF

ENDPROC   


PROCEDURE kte_var12_1
* MESSAGEBOX("������� �1 ������� ����� ",0," ")

* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		          m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc)and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND direct= m.direction AND dcinn<=m.d_nach AND lh>=m.L_obr INTO TABLE rezc_tmp ORDER BY prior
		    n=_tally
		    SELECT rezc_tmp

		    IF n>=1   
		     m.kod_instr=rezc_tmp.instr_id
            
   		    SELECT rezc_tmp 
   		    GO top
   		    SCATTER memvar
	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn
           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_

   		    
   		    DO case
   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
    		           m.splav_ok=1  		             
   		             
   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
   		               m.splav_ok=1 
   		                		             
   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
   		               m.splav_ok=1  		             
   		            
   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
   		               m.splav_ok=1  		             
   		                		          
   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
   		               m.splav_ok=1  		             
   		             		      		    
   		    endcase       
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     
		     thisform.Refresh
		    endif

		endif 
	
endfor	


	   IF  m.instr_OK=.f.   &&& ���� ����� �� ������
	   	    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND direct= m.direction AND dcinn<=m.d_nach AND lh>=m.L_obr INTO TABLE rezc_tmp ORDER BY prior
		     SELECT * from Cutters WHERE direct= m.direction AND lh>=m.L_obr  INTO CURSOR rrr_ 
		       n=_tally
		     IF n=0
		           MESSAGEBOX(" ��� ����� �� ����� ����� ��������  ������, ��� �������� ",0," ")		                  
             ENDIF
         
		      SELECT * from Cutters WHERE direct= m.direction AND dcinn >=m.d_nach  INTO CURSOR rrr_             
		       n=_tally
		     IF n>0
		           MESSAGEBOX(" ��� ����� �� ����� ������� ���������� ��������� ��������� ������, ��� �������� ������� ��������� ",0," ")		                  
             ENDIF		     
        endif


IF  m.instr_OK=.T.

	* ������ ������� �������
*!*		m.Ar_max = m.ArMax   &&&  �� �������� ��������
*!*		m.ar_prip= m.X_max-m.X_min  &&&  �� ��������
*!*		m.ar_obr=m.X_max/20   &&& �� ��������

	m.ar_rasc=0.5

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))


	SELECT * from boring_1 WHERE UPPER(smg)= m.SMG_met  AND ar <= m.ar_rasc  INTO CURSOR regim_ order BY ar desc, f desc
	
	SELECT regim_ 
	n1=_tally
	GO top


	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 

* ����� ������ �� ������� ����������

m.rrr=VAL(m.roughness)

SELECT * from R_shift WHERE ra<=m.rrr AND r = m.re  INTO CURSOR fff_  order BY ra desc
	
	
	SELECT fff_

	IF fff_.f<m.F_tabl   &&& ���� ������ �� ������������� ������ ��� ���������, �� ��������� ���������
	     m.F_tabl= fff_.f
	endif

	

 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    m.V_tabl=INT(m.V_tabl*m.kmpa)
	endif


endif


	 
	 m.V=m.V_tabl
	 m.F=m.F_tabl
	 m.Ar=m.ar_rasc

m.kc=Cur_metal_.kc	 
	 

* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file

  	
* MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	
	 
	
ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF
	

ENDFUNC  


PROCEDURE kte_var13
 
* MESSAGEBOX("�������  ����� ����� �������� ",0," ")

* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		           m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc) and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND direct= m.direction AND CW<=m.B_kan AND cdx >= m.H_kan  AND DCINN <= d_nach INTO TABLE rezc_tmp ORDER BY prior, cw desc
		    n=_tally
		    SELECT rezc_tmp
		    
		    IF n>=1   
          
   		    SELECT rezc_tmp 
   		    GO top
    		  SCATTER memvar
 	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn

           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_
   		    
	   		    DO case
	   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
	    		           m.splav_ok=1  		             
	   		             
	   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
	   		               m.splav_ok=1 
	   		                		             
	   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
	   		               m.splav_ok=1  		             
	   		            
	   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
	   		               m.splav_ok=1  		             
	   		                		          
	   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
	   		               m.splav_ok=1  		               		             		      		    
	   		    endcase 
	   		          
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     
		    endif

		endif 
	
endfor	

		   IF  m.instr_OK=.f.   &&& ���� ����� �� ������
			     SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND  direct= m.direction AND CW<=m.B_kan  INTO CURSOR rrr_ 
			       n=_tally
			     IF n=0
			           MESSAGEBOX(" ��� ����������� �� ����� ������ ��������� ������, ��� ������ ������� ",0," ")		                  
	             ENDIF
             
			     SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND  direct= m.direction AND  cdx >= m.H_kan INTO CURSOR rrr_              
			       n=_tally
			     IF n=0
			           MESSAGEBOX(" ��� ����������� �� ����� ����� ��������� ������, ��� ������� ������� ",0," ")		                  
	             ENDIF		     

			     SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND  direct= m.direction AND DCINN <= d_nach INTO CURSOR rrr_              
			       n=_tally
			     IF n=0
			           MESSAGEBOX(" ��� ����������� �� ����� ������� ���������� ��������� ������ ��������� ",0," ")		                  
	             ENDIF		
            endif


IF  m.instr_OK=.T.

	* ������ ������� �������
 	m.ar_rasc = rezc_tmp.cw  &&&  �� �������� ��������

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))


	SELECT * from INTGROOVE WHERE UPPER(smg)= m.SMG_met  AND cw >= m.ar_rasc  INTO CURSOR regim_ order BY cw desc
	n=_tally

    IF n>=1
	SELECT regim_ 
	GO top

	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 
	
	else
       MESSAGEBOX("� ��  ��� ������ �� ������� ��� ������ �������� �������� + ������ ���� ",0," ")	
    endif

 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    V_tabl=INT(V_tabl*m.kmpa)
	endif

endif


	* �������� �� �������� � ������� �������   �� ����������

		   m.kc=Cur_metal_.kc

	     m.f2=F_tabl    

	 
	 m.V=V_tabl
	 m.F=m.f2
	 m.Ar=m.ar_rasc
	 
	 



* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file
 	
* MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	
	
ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF
 


ENDPROC  


PROCEDURE kte_var13
 
* MESSAGEBOX("�������  ����� ����� �������� ",0," ")

* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		           m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc) and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND direct= m.direction AND CW<=m.B_kan AND cdx >= m.H_kan  AND DCINN <= d_nach INTO TABLE rezc_tmp ORDER BY prior, cw desc
		    n=_tally
		    SELECT rezc_tmp
		    
		    IF n>=1   
          
   		    SELECT rezc_tmp 
   		    GO top
    		  SCATTER memvar
 	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn

           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_
   		    
	   		    DO case
	   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
	    		           m.splav_ok=1  		             
	   		             
	   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
	   		               m.splav_ok=1 
	   		                		             
	   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
	   		               m.splav_ok=1  		             
	   		            
	   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
	   		               m.splav_ok=1  		             
	   		                		          
	   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
	   		               m.splav_ok=1  		               		             		      		    
	   		    endcase 
	   		          
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     
		    endif

		endif 
	
endfor	

		   IF  m.instr_OK=.f.   &&& ���� ����� �� ������
			     SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND  direct= m.direction AND CW<=m.B_kan  INTO CURSOR rrr_ 
			       n=_tally
			     IF n=0
			           MESSAGEBOX(" ��� ����������� �� ����� ������ ��������� ������, ��� ������ ������� ",0," ")		                  
	             ENDIF
             
			     SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND  direct= m.direction AND  cdx >= m.H_kan INTO CURSOR rrr_              
			       n=_tally
			     IF n=0
			           MESSAGEBOX(" ��� ����������� �� ����� ����� ��������� ������, ��� ������� ������� ",0," ")		                  
	             ENDIF		     

			     SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND  direct= m.direction AND DCINN <= d_nach INTO CURSOR rrr_              
			       n=_tally
			     IF n=0
			           MESSAGEBOX(" ��� ����������� �� ����� ������� ���������� ��������� ������ ��������� ",0," ")		                  
	             ENDIF		
            endif


IF  m.instr_OK=.T.

	* ������ ������� �������
 	m.ar_rasc = rezc_tmp.cw  &&&  �� �������� ��������

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))


	SELECT * from INTGROOVE WHERE UPPER(smg)= m.SMG_met  AND cw >= m.ar_rasc  INTO CURSOR regim_ order BY cw desc
	n=_tally

    IF n>=1
	SELECT regim_ 
	GO top

	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 
	
	else
       MESSAGEBOX("� ��  ��� ������ �� ������� ��� ������ �������� �������� + ������ ���� ",0," ")	
    endif

 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    V_tabl=INT(V_tabl*m.kmpa)
	endif

endif


	* �������� �� �������� � ������� �������   �� ����������

		   m.kc=Cur_metal_.kc

	     m.f2=F_tabl    

	 
	 m.V=V_tabl
	 m.F=m.f2
	 m.Ar=m.ar_rasc
	 
	 
	 P_rasc = (m.ar*F2*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	   m_rasc = (m.ar*F2*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc


* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file
 	
 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	
	
ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF

ENDPROC  
 


PROCEDURE kte_var13_1
 
* MESSAGEBOX("������� ��������� ����� ����� ",0," ")

* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		           m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc) and  m.instr_OK=.f.
		    SELECT * from Cutters WHERE tip=m.Kd_gr_rezc  AND direct= m.direction AND CW<=m.B_kan AND cdx >= m.H_kan  AND DCINN <= d_nach INTO TABLE rezc_tmp ORDER BY prior, cw desc
		    n=_tally
		    SELECT rezc_tmp
		    
		    IF n>=1   
          
   		    SELECT rezc_tmp 
   		    GO top
   		    
    		  SCATTER memvar
 	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn
             
  
           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_

	   		    DO case
	   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
	    		           m.splav_ok=1  		             
	   		             
	   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
	   		               m.splav_ok=1 
	   		                		             
	   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
	   		               m.splav_ok=1  		             
	   		            
	   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
	   		               m.splav_ok=1  		             
	   		                		          
	   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
	   		               m.splav_ok=1  		               		             		      		    
	   		    endcase 
	   		          
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     
		    endif

		endif 
	
endfor	

		   IF  m.instr_OK=.f.   &&& ���� ����� �� ������

             
			     SELECT * from Cutters WHERE   cdx >= m.H_kan AND Daxx-0 AND Daxn=0 INTO CURSOR rrr_              
			       n=_tally
			     IF n=0
			           MESSAGEBOX(" ��� ����������� �� ����� ����� ��������� ������, ��� ������� ������� ",0," ")		                  
	             ENDIF		     
            endif




IF  m.instr_OK=.T.

	* ������ ������� �������
 	m.ar_rasc = 0.5

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))


	SELECT * from INTGROOVE WHERE UPPER(smg)= m.SMG_met  AND cw >= m.ar_rasc  INTO CURSOR regim_ order BY cw desc
	n=_tally

    IF n>=1
	SELECT regim_ 
	GO top

	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 
	
	else
       MESSAGEBOX("� ��  ��� ������ �� ������� ��� ������ �������� �������� + ������ ���� ",0," ")	
    endif
	

 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa


	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    V_tabl=INT(V_tabl*m.kmpa)
	endif

endif


	     m.f2=F_tabl    

 
	 m.V=V_tabl
	 m.F=m.f2
	 m.Ar=m.ar_rasc
	m.kc=Cur_metal_.kc	  
	 
	 P_rasc = (m.ar*F2*V_tabl*m.kc)/(60*1000*0.85)
*	   thisform.text7.Value= P_rasc

	   m_rasc = (m.ar*F2*m.kc*m.x_max/1000)
*	    thisform.text8.Value= m_rasc

	thisform.Refresh

* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file

  	
 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	
	
	
	
ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF
	

ENDPROC         


PROCEDURE kte_var14

* MESSAGEBOX("������ �������� ",0," ")

* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		           m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc) and  m.instr_OK=.f. 
		   IF m.ugol_rezb=55
		       SELECT * from Cutters WHERE tip=m.Kd_gr_rezc AND direct= m.direction AND TPI=m.P_pezb  INTO TABLE rezc_tmp ORDER BY prior		   
		   else
		       SELECT * from Cutters WHERE tip=m.Kd_gr_rezc AND direct= m.direction AND MM>=m.P_pezb  INTO TABLE rezc_tmp ORDER BY prior, mm asc
		   endif 
		    n=_tally
		    SELECT rezc_tmp
		    
		    IF n>=1   
          
   		    SELECT rezc_tmp 
   		    GO top
    		  SCATTER memvar
 	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn

           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_
   		    
	   		    DO case
	   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
	    		           m.splav_ok=1  		             
	   		             
	   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
	   		               m.splav_ok=1 
	   		                		             
	   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
	   		               m.splav_ok=1  		             
	   		            
	   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
	   		               m.splav_ok=1  		             
	   		                		          
	   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
	   		               m.splav_ok=1  		               		             		      		    
	   		    endcase 
	   		          
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     
		     thisform.Refresh

		    endif

		endif 
	
endfor	



IF  m.instr_OK=.T.

	* ������ ������� �������

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))
	 
	SELECT * from V_rezb WHERE UPPER(smg)= m.SMG_met    INTO CURSOR regim_ 
	n=_tally

    IF n>=1
	SELECT regim_ 
	GO top
	m.F_tabl= m.P_pezb 
	m.V_tabl= regim_.V 
	
	else
       MESSAGEBOX("� ��  ��� ������ �� ������� ��� ������ �������� �������� + ������ ���� ",0," ")	
    endif

	
* ������ ����� ��������	
IF m.KOD_REZB=1 OR m.KOD_REZB=3

 	SELECT * from N_metr WHERE Ph=m.P_pezb   INTO CURSOR n_proh_  

    SELECT n_proh_  
    m.ar_rasc=n_proh_.n1
 ELSE
    IF m.ugol_rezb=55
    
    	SELECT * from N_metr WHERE TPI=m.P_pezb   INTO CURSOR n_proh_  

    SELECT n_proh_  
        m.ar_rasc=n_proh_.n1
    endif   
      
ENDIF

 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    V_tabl=INT(V_tabl*m.kmpa)
	endif

endif


	 
	 m.V=V_tabl
	 m.F=m.F_tabl
	 m.Ar=m.ar_rasc
	 
	 
* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file
 	
 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	

ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF


ENDPROC  

 
PROCEDURE kte_var15

* MESSAGEBOX("������ ���������� ",0," ")

* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		           m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
 
          
		IF !EMPTY(m.Kd_gr_rezc) and  m.instr_OK=.f. 
		   IF m.ugol_rezb=55
		       SELECT * from Cutters WHERE tip=m.Kd_gr_rezc AND direct= m.direction AND TPI=m.P_pezb AND DCINN <= d_nach INTO TABLE rezc_tmp ORDER BY prior		   
		   else
		       SELECT * from Cutters WHERE tip=m.Kd_gr_rezc AND direct= m.direction AND MM>=m.P_pezb AND DCINN <= d_nach INTO TABLE rezc_tmp ORDER BY prior, mm asc
		   endif 
		    n=_tally
		    SELECT rezc_tmp

		    IF n>=1   
          
   		    SELECT rezc_tmp 
   		    GO top
    		  SCATTER memvar
 	         m.kod_instr=rezc_tmp.instr_id
             m.name_instr=rezc_tmp.name
             m.obozn_instr=rezc_tmp.obozn

           * �������� ������
            m.cur_splav=ALLTRIM(UPPER(m.mat_name))
            m.cur_SMG= UPPER(SUBSTR(Cur_metal_.smg,1,1))
            
   		    SELECT * from splav WHERE ALLTRIM(UPPER(splav)) = m.cur_splav  INTO CURSOR  sss_
   		    m.splav_ok=0
   		    SELECT sss_

	   		    DO case
	   		       CASE  m.cur_SMG="P" and !EMPTY(sss_.smg_p)
	    		           m.splav_ok=1  		             
	   		             
	   		       CASE   m.cur_SMG="M" AND !EMPTY(sss_.smg_M)
	   		               m.splav_ok=1 
	   		                		             
	   		       CASE   m.cur_SMG="K" AND !EMPTY(sss_.smg_K) 
	   		               m.splav_ok=1  		             
	   		            
	   		       CASE   m.cur_SMG="N" AND !EMPTY(sss_.smg_N)
	   		               m.splav_ok=1  		             
	   		                		          
	   		       CASE  m.cur_SMG="S"  AND !EMPTY(sss_.smg_S)
	   		               m.splav_ok=1  		               		             		      		    
	   		    endcase 
	   		          
		        if m.splav_ok=0
		           MESSAGEBOX("�������� ������� �������� �� ������������ ��� ��������� ���������� ��������� ������ ",0," ")
		        ENDIF
		        
		       m.instr_OK=.t.
		       EXIT	       		     
		    endif

		endif 
	
endfor	



IF  m.instr_OK=.T.

	* ������ ������� �������

	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))
	 
	SELECT * from V_rezb WHERE UPPER(smg)= m.SMG_met    INTO CURSOR regim_ 
	n=_tally

    IF n>=1
	SELECT regim_ 
	GO top
	m.F_tabl= m.P_pezb 
	m.V_tabl= regim_.V 
	
	else
       MESSAGEBOX("� ��  ��� ������ �� ������� ��� ������ �������� �������� + ������ ���� ",0," ")	
    endif
	
* ������ ����� ��������	
IF m.KOD_REZB=1 OR m.KOD_REZB=3

 	SELECT * from N_metr WHERE Ph=m.P_pezb   INTO CURSOR n_proh_  

    SELECT n_proh_  
    m.ar_rasc=n_proh_.n1
 ELSE
    IF m.ugol_rezb=55
    
    	SELECT * from N_metr WHERE TPI=m.P_pezb   INTO CURSOR n_proh_  

    SELECT n_proh_  
        m.ar_rasc=n_proh_.n1
    endif   
      
ENDIF

 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa

	m.kmpa=1.0
	SCAN
	IF K_mpa.mpa_proc>=koef
	    m.kmpa=K_mpa.kmpa
	    exit
	endif
	ENDSCAN

	IF m.kmpa<>1.0
	    V_tabl=INT(V_tabl*m.kmpa)
	endif

endif
	 
	 m.V=V_tabl
	 m.F=m.F_tabl
	 m.Ar=m.ar_rasc
	 

* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file

  	
 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	
	
ELSE
   MESSAGEBOX("� ����������� ������ ���������� �� ������",0," ")
ENDIF

ENDPROC 


PROCEDURE kte_var16
 
*MESSAGEBOX("���������  ",0," ")

* ������� ������ �������
SELECT * from METAL WHERE id_mat= m.cur_id_mat  INTO CURSOR Cur_metal_

* ������� ������ ����������� ������ �����������
 m.instr_OK=.f.
Select prior1, prior2, prior3, prior4, prior5, prior6  from PRIORITET where KTE= m.cur_kte AND chist=m.cur_chist INTO CURSOR ttt_

* ������ �����������
FOR ii=1 TO 6 STEP 1

   		    DO case
   		       CASE  ii=1
    		          m.Kd_gr_rezc=ALLTRIM(ttt_.prior1)	               		             
   		       CASE  ii=2
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior2) 
   		       CASE  ii=3
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior3) 
   		       CASE  ii=4
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior4) 
   		       CASE  ii=5
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior5) 
   		       CASE  ii=6
   		               m.Kd_gr_rezc=ALLTRIM(ttt_.prior6)    		                		                     		             		      		    
   		    endcase  
          
		IF !EMPTY(m.Kd_gr_rezc)and  m.instr_OK=.f.
		    m.sv_diam=2*m.X_max
		    SELECT * from drills WHERE tip=m.Kd_gr_rezc  AND direct= m.direction AND Dc = m.sv_diam AND Lu>=m.L_obr INTO TABLE drills_tmp ORDER BY Lu asc
		    n=_tally
		    SELECT drills_tmp

		    IF n>=1               
   		    SELECT drills_tmp 
   		    GO top
   		    SCATTER memvar
	         m.kod_instr=drills_tmp.instr_id
             m.name_instr=drills_tmp.name
             m.obozn_instr=drills_tmp.obozn

		       m.instr_OK=.t.
		       m.Ar=m.X_max
		       EXIT	       		     
		    endif

		endif 
	
endfor	

* ����������� ������ �=12
IF m.instr_OK=.f.
		   IF  m.instr_OK=.f.   &&& ���� ����� �� ������
			     SELECT * from drills WHERE direct= m.direction AND Dc >= m.sv_diam  INTO CURSOR rrr_ 
			       n=_tally
			     IF n=0
			           MESSAGEBOX(" ��� ������ �� ����� ������� ������ ��������� ",0," ")		                  
	             ENDIF
             
			     SELECT * from drills WHERE direct= m.direction AND  Lu>=m.L_obr INTO CURSOR rrr_              
			       n=_tally
			     IF n=0
			           MESSAGEBOX(" ��� ������ �� ����� ����� ������, ��� ������� ��������� ",0," ")		                  
	             ENDIF		     
            endif




		    SELECT * from drills WHERE  direct= m.direction AND Dc = 12 AND Lu>=m.L_obr INTO TABLE drills_tmp ORDER BY Lu asc
             n=_tally
		    SELECT drills_tmp

		    IF n>=1              
   		    SELECT drills_tmp 
   		    GO top
   		    SCATTER memvar
	         m.kod_instr=drills_tmp.instr_id
             m.name_instr=drills_tmp.name
             m.obozn_instr=drills_tmp.obozn

             MESSAGEBOX("������ � �������� ��������� � ������ ��������� �� �������. �������� ������ � ������������ ��������� 12 ��.",0," ")
		     m.instr_OK=.t.
		     m.Ar=6
		    endif   		    
endif





IF  m.instr_OK=.T.

	* ������ ������� �������
	 m.SMG_met= ALLTRIM(UPPER(Cur_metal_.smg))

	SELECT * from drilling WHERE UPPER(smg)= m.SMG_met  AND d >= m.sv_diam  INTO CURSOR regim_ order BY d
	SELECT regim_ 
	n1=_tally
	GO top


	m.F_tabl= regim_.F  
	m.V_tabl= regim_.V 


 IF m.hardness>35   &&& ������������� �� ���������

   MESSAGEBOX("������ ��� ���������� ������ ���� � ����������",0," ")
 
 ELSE  

	*�������������  V  �� ��������� ���������
	koef= (Cur_metal_.mpa/Cur_metal_.etal_mpa)*100 
	SELECT K_mpa
	m.kmpa=1.0
	SCAN
		IF K_mpa.mpa_proc>=koef
		    m.kmpa=K_mpa.kmpa
		    exit
		endif
	ENDSCAN

	IF m.kmpa<>1.0
	    V_tabl=INT(V_tabl*m.kmpa)
	endif
	

endif

	 m.V=m.V_tabl
	 m.F=m.F_tabl


*  �������� �� �������� � ������� �� ����������

* ������ � �������� ����	
m.OUT_inst_info=STR(m.kod_instr,4)+","+m.obozn_instr+","+STR(m.Ar,4,1)+","+STR(m.F,4,2)+","+STR(m.V,4)
	  

IF FILE('Instr_rezult.txt')  && Does file exist? 
   gnErrFile = FOPEN('Instr_rezult.txt',12)     && If so, open read-write
ELSE
   gnErrFile = FCREATE('Instr_rezult.txt')  && If not create it
ENDIF
IF gnErrFile < 0     && Check for opening file
   WAIT '�� ���� ������� �������� ���� ��� ������' WINDOW NOWAIT
ELSE  &&  write to file
   =FWRITE(gnErrFile , m.OUT_inst_info)
ENDIF
=FCLOSE(gnErrFile )     && Close file

  	
 MESSAGEBOX(m.OUT_inst_info,0,"������ � �������� ����  Instr_rezult.txt ")	
	
	
	
ELSE
   MESSAGEBOX("� ����������� ����� ���������� �� ������",0," ")
ENDIF
	

ENDPROC   
  
