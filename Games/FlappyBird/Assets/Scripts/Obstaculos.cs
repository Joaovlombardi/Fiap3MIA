using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Obstaculos : MonoBehaviour
{
    [SerializeField]   
    private float velocidade = 0.6f;
    // Update is called once per frame

    [SerializeField]
    private float variacaoPosicaoY;
    private Vector3 posicaoPassaro;
    private bool pontuei;
    private UIcontroller controlardorUI;
    private void Start()
    {
        this.posicaoPassaro = GameObject.FindObjectOfType<personagem>().transform.position;
        this.controlardorUI = GameObject.FindObjectOfType<UIcontroller>();
    }

    private void Awake()
    {
        this.transform.Translate(Vector3.up * Random.Range(-variacaoPosicaoY, variacaoPosicaoY));
    }

    void Update()
    {
        this.transform.Translate(Vector3.left * velocidade * Time.deltaTime);
        if (this.pontuei && this.transform.position.x < this.posicaoPassaro.x) ;
        {
            this.controlardorUI.adicionarPontos();
            this.pontuei = true;
        }
        
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        this.Destruir();
    }

    private void Destruir()
    {
        Destroy(this.gameObject);
    }
}
